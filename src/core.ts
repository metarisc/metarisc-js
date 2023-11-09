import { AxiosResponse } from "axios";
import { AuthMethod, Client } from "./client";
import { Collection } from "./collection";

interface RequestConfig {
  body?: any;
  headers?: { [name: string]: string | string[] };
  params?: { [param: string]: string | string[] };
  endpoint?: string;
  method?: string;
}

export interface MetariscConfig {
  metarisc_url?: string;
}

export interface OAuth2Options {
  client_id?: string;
  client_secret?: string;
  response_type?: string;
  redirect_uri?: string;
  state?: string;
  code?: string;
  scope?: string;
  [name: string]: string;
}

export interface GrantResponse {
  access_token?: string;
  expires_in?: number;
  id_token?: string;
  refresh_token?: string;
  refresh_expires_in?: number;
  session_state?: string;
  token_type?: string;
  error?: string;
  error_description?: string;
}

export class Core {
  protected client: Client;
  protected config: MetariscConfig;

  constructor(config: MetariscConfig, client?: Client) {
    this.config = config;
    this.client = client ?? new Client(config);
  }

    async request<T>(config : RequestConfig) : Promise<AxiosResponse<T>>
    {
        return this.client.request<T>(config);
    }

    collect<T>(config : RequestConfig) : Collection<T>
    {
        return new Collection<T>(this, {
            endpoint: config.endpoint || '/',
            params: config.params,
            headers: config.headers
        });
    }

    async authenticate(auth_method: AuthMethod, options: OAuth2Options): Promise<GrantResponse> {
        return await this.client.authenticate(auth_method, options);
    }

    setAccessToken(access_token: string): void {
        this.client.setAccessToken(access_token);
    }
}
