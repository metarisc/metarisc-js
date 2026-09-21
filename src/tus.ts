import { Core, MetariscConfig } from "./core";
import { HttpRequest, Upload } from "tus-js-client";
import { Client } from "./client";
import { SessionExpiredError } from "./error/SessionExpiredError";

export class Tus extends Core {
	constructor(config: MetariscConfig, client: Client) {
		super(config, client);
	}

	upload(
		file: File,
		errorFn: (error: Error) => void,
		chunckFn: (url: string, progress: number) => void,
		successFn: () => void
	): void {
		const upload = new Upload(file, {
			endpoint: this.config.metarisc_url + "/resumable-file-uploads/files",
			retryDelays: [0, 3000, 6000, 9000, 12000],
			chunkSize: 1024 * 512,
			metadata: {
				fileName: file.name,
				filetype: file.type
			},
			onBeforeRequest: async (request: HttpRequest) => {
				const authorizationHeader = await this.client.getAuthorizationHeader();

				if (!authorizationHeader) {
					throw new SessionExpiredError("La session utilisateur a expirée.");
				}

				request.setHeader("Authorization", authorizationHeader);
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
			}
		});
		upload.start();
	}

	/**
	 * Récupération d'un fichier stocké sous forme de Blob.
	 */
	async download(url: string): Promise<Blob> {
		return this.request({
			method: "GET",
			endpoint: url,
			responseType: "blob"
		}).then((response) => {
			return response.data as Blob;
		});
	}
}
