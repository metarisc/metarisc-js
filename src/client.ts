import axios, {
	AxiosInstance,
	AxiosResponse,
	RawAxiosRequestHeaders,
} from "axios";
import axiosRetry from "axios-retry";
import { MetariscConfig, OAuth2Options } from "./core";
import { GrantResponse, OAuth2 } from "./auth/oauth2";
import { setupCache } from "axios-cache-interceptor";
import Utils from "./utils";

interface RequestConfig {
	body?: any;
	headers?: { [name: string]: string | string[] };
	params?: { [param: string]: string | string[] };
	endpoint?: string;
	method?: string;
}

export enum AuthMethod {
	CLIENT_CREDENTIALS,
	AUTHORIZATION_CODE,
}

export class Client {
	private axios: AxiosInstance;

	private oauth2: OAuth2;
	private access_token?: string;
	private refresh_token?: string;

	constructor(config : MetariscConfig) {
		// Paramétrage OAuth2
		this.oauth2 = new OAuth2({
			client_id: config.client_id,
			client_secret: config.client_secret,
		});

		// Initialisation du client HTTP
		this.axios = axios.create({
			baseURL: config.metarisc_url ?? "https://api.metarisc.fr/",
			headers: {
				common: this.getDefaultHeaders(),
			},
		});

		// Axios Interceptors
		// Request interceptors are FILO (First In Last Out)
		// Response interceptors are FIFO (First In First Out)

		// Axios interceptor : Enable HTTP Caching
		// When combining axios-cache-interceptors with other interceptors, you may encounter some inconsistences.
		// See : https://github.com/arthurfiorette/axios-cache-interceptor/issues/449#issuecomment-1370327566
		this.axios = setupCache(this.axios);

		// Axios interceptor : Ajoute l'access token à la requête
		// L'access token peut venir d'un premier authenticate, ou d'un refresh token obtenu au cours des interceptors
		this.axios.interceptors.request.use((config) => {
			config.headers["Authorization"] = this.getAccessToken();
			return config;
		});

		// Axios interceptor : Retry strategy
		axiosRetry(this.axios, {
			retries: 3,
			retryDelay: axiosRetry.exponentialDelay,
		});

		// Axios interceptor : Refresh Token (https://datatracker.ietf.org/doc/html/rfc6749#section-1.5)
		this.axios.interceptors.request.use(async (config) => {
			// Si l'access_token a expiré on demande un échange avec le refresh token obtenu précedemment
			// Si le refresh ne fonctionne pas, on ne fait rien
			if (this.getAccessToken() !== undefined && this.getRefreshToken() !== undefined && Utils.tokenExpired(this.getAccessToken())) {
				try {
					const result = await this.oauth2.refreshToken(this.getRefreshToken());
					this.setAccessToken(result.token_type + ' ' + result.access_token);
					this.setRefreshToken(result.refresh_token);
				}
				catch(e) {
					//
				}
			}
			return config;
		});
	}

	async authenticate(
		auth_method: AuthMethod,
		options: OAuth2Options
	): Promise<GrantResponse> {
		if(auth_method === AuthMethod.AUTHORIZATION_CODE) {
			const response = await this.oauth2.getAuthorizationCode(options);
			this.setAccessToken(response.token_type + " " + response.access_token);
			this.setRefreshToken(response.refresh_token);
			return response;
		}
		else if(auth_method === AuthMethod.CLIENT_CREDENTIALS) {
			const response = await this.oauth2.getClientCredentials(options);
			this.setAccessToken(response.token_type + " " + response.access_token);
			return response;
		}
		else {
			throw new Error("auth_method inconnue");		
		}
	}

	/**
	 * Lance une requête (authentifiée si possible) sur l'API Metarisc.
	 */
	async request<T>(config: RequestConfig): Promise<AxiosResponse<T>> {
		return this.axios.request<T>({
			method: config.method || "GET",
			url: config.endpoint || "/",
			params: config.params,
			data: config.body,
			headers: config.headers,
		});
	}

	/**
	 * Définition de l'Access Token
	 */
	setAccessToken(access_token: string): void {
		this.access_token = access_token;
	}

	/**
	 * Récupération de l'Access Token
	 */
	getAccessToken(): string|undefined {
		return this.access_token;
	}

	/**
	 * Définition du Refresh Token
	 */
	setRefreshToken(refresh_token: string): void {
		this.refresh_token = refresh_token;
	}

	/**
	 * Récupération du Refresh Token
	 */
	getRefreshToken(): string|undefined {
		return this.refresh_token;
	}

	/**
	 * Retourne les headers HTTP par défauts devant être présents dans toutes les requêtes Metarisc.
	 */
	private getDefaultHeaders(): RawAxiosRequestHeaders {
		const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined'; // https://github.com/axios/axios/blob/v1.x/lib/platform/common/utils.js#L1
		const headers: RawAxiosRequestHeaders = {};

		// UA Headers (surcharge le UA uniquement sur un env Server car le navigateur considéra cela comme unsafe)
		if(!hasBrowserEnv) {
			headers["User-Agent"] = "MetariscJs/dev"; // Format User-Agent (https://www.rfc-editor.org/rfc/rfc9110#name-user-agent)
		}
		headers["Metarisc-User-Agent"] = JSON.stringify({
			lang: "js",
			version: 'dev'
		});

		return headers;
	}
}
