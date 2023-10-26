import axios, { AxiosInstance, AxiosResponse } from "axios";
import axiosRetry from "axios-retry";
import oauth from 'axios-oauth-client';
import { GrantResponse, MetariscConfig, OAuth2Options, RequestConfig } from './core';
import { OAuth2 } from "./auth/oauth2";

export enum AuthMethod {
  CLIENT_CREDENTIALS,
  AUTHORIZATION_CODE
}

export class Client {

  private axios : AxiosInstance;

  private access_token: string;

  constructor(config : MetariscConfig) {
    this.axios = axios.create({
      baseURL: config.metarisc_url ?? 'https://api.metarisc.fr/',
    });

    // Axios interceptor : Retry strategy
    axiosRetry(this.axios, {
        retries: 3,
        retryDelay: axiosRetry.exponentialDelay
    });
  }

  async authenticate(auth_method: AuthMethod, options: OAuth2Options): Promise<void> {
    let result;
    switch (auth_method) {
      case AuthMethod.AUTHORIZATION_CODE:
        result = await this.getAuthorizationCode(options);
        break;
      case AuthMethod.CLIENT_CREDENTIALS:
        result = await this.getClientCredentials(options);
        break;
      default:
        return;
    }

    if (result) {
      const token = result.token_type + ' ' + result.access_token;
      this.setAccessToken(token);
      this.axios.interceptors.request.use(function (config) {
        config.headers['Authorization'] = token;
        return config;
      });
    }
  }

  async request<T>(config: RequestConfig): Promise<AxiosResponse<T>> {
    return this.axios.request<T>({
      method: config.method || 'GET',
      url: config.endpoint || '/',
      params: config.params,
      data: config.body,
      headers: config.headers
    });
  }

  async getAuthorizationCode(options: OAuth2Options): Promise<GrantResponse> {
    const fn = oauth.authorizationCode(
      axios.create(),
      OAuth2.ACCESS_TOKEN_URL,
      options.client_id ?? '',
      options.client_secret ?? '',
      options.redirect_uri ?? '',
      options.code ?? '',
      options.scope ?? ''
    )
    return await fn(options.code ?? '', options.scope ?? '')
  }

  async getClientCredentials(options: OAuth2Options): Promise<GrantResponse> {
    const fn = oauth.clientCredentials(
      axios.create(),
      OAuth2.ACCESS_TOKEN_URL,
      options.client_id ?? '',
      options.client_secret ?? ''
    )
    return await fn(options.scope ?? '');
  }

  setAccessToken(access_token: string): void {
    this.access_token = access_token;
  }

  getAccessToken(): string {
    return this.access_token;
  }
}