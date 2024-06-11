import { AxiosResponse } from "axios";
import { AuthMethod, Client } from "./client";
import { Collection } from "./collection";
import { GrantResponse, RefreshResponse } from "./auth/oauth2";

interface RequestConfig {
    body?: any;
    headers?: { [name: string]: string | string[] };
    params?: { [param: string]: string | string[] };
    endpoint?: string;
    method?: string;
}

export interface MetariscConfig {
    metarisc_url?: string;
    client_id: string;
    client_secret?: string;
}

export interface OAuth2Options {
    response_type?: string;
    redirect_uri?: string;
    state?: string;
    code?: string;
    scope?: string;
    [name: string]: string;
}

export class Core {
    protected client: Client;
    protected config: MetariscConfig;

    constructor(config: MetariscConfig, client?: Client) {
        this.config = config;
        this.client = client ?? new Client(config);
    }

    async request<T>(config: RequestConfig): Promise<AxiosResponse<T>> {
        return this.client.request<T>(config);
    }

    collect<T>(config: RequestConfig): Collection<T> {
        return new Collection<T>(this, {
            endpoint: config.endpoint || "/",
            params: config.params,
            headers: config.headers
        });
    }

    async authenticate(
        auth_method: AuthMethod,
        options: OAuth2Options
    ): Promise<GrantResponse> {
        return await this.client.authenticate(auth_method, options);
    }

    refreshToken(): Promise<RefreshResponse> {
        return this.client.refreshToken();
    }

    setAccessToken(access_token: string): void {
        this.client.setAccessToken(access_token);
    }

    setRefreshToken(refresh_token: string): void {
        this.client.setRefreshToken(refresh_token);
    }

    setActiveOrganisation(orgId: string): void {
        this.client.setActiveOrganisation(orgId);
    }
}
