import { Core, MetariscConfig } from './core';
import { HttpRequest, Upload } from 'tus-js-client';
import { Client } from './client';
import { Utils } from './utils';
import { SessionExpiredError } from './error/SessionExpiredError';

export class Tus extends Core
{
  constructor(config: MetariscConfig, client: Client) {
    super(config, client);
  }

  upload(file: File, errorFn: (error: Error) => void, chunckFn: (url: string, progress: number) => void, successFn: () => void): void {
    const upload = new Upload(file, {
      endpoint: this.config.metarisc_url + '/resumable-file-uploads/files',
      retryDelays: [0, 3000, 6000, 9000, 12000],
      chunkSize: 1024 * 512,
      metadata: {
        fileName: file.name,
        filetype: file.type,
      },
      onBeforeRequest: async (request: HttpRequest) => {
        const access_token = this.client.getAccessToken();
        if (access_token && Utils.tokenExpired(access_token)) {
          try {
            await this.refreshToken();
            request.setHeader(
              "Authorization",
              this.client.getAccessToken() ?? ""
            );
          } catch (e) {
            throw new SessionExpiredError(
              "La session utilisateur a expirée. " + e.message
            );
          }
        } else {
          request.setHeader(
            "Authorization",
            this.client.getAccessToken() ?? ""
          );
        }
      },
      onError: (error) => {
        errorFn(error);
      },
      onChunkComplete: (chunkSize, bytesAccepted, bytesTotal) => {
        const progress = Math.floor((bytesAccepted * 100) / bytesTotal);
        const url = upload.url;
        chunckFn(url, progress);
      },
      onSuccess: () => {
        successFn();
      },
    });
    upload.start();
  }

  download(fileId: string) {
    return this.request({
      method: "GET",
      endpoint: "/resumable-file-uploads/files/" + fileId
    });
  }
}