import axios from "axios";
import oauth from "axios-oauth-client";

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

export interface RefreshResponse {
    access_token: string;
    token_type: string;
    expires_in?: number;
    refresh_token?: string;
    scope?: string;
}

export class OAuth2
{
    public static AUTHORIZATION_URL = 'https://id.metarisc.fr/auth/realms/production/protocol/openid-connect/auth';
    public static ACCESS_TOKEN_URL  = 'https://id.metarisc.fr/auth/realms/production/protocol/openid-connect/token';

    private options: OAuth2Options;
 
    /**
     * Utilisation d'OAuth2 pour récupérer un access token utilisable dans Metarisc.
     **/
    constructor(options: OAuth2Options)
    {
        this.options = options;
    }

    /**
     * OAuth2 Authorize URL Generator helper.
     */
    public static authorizeUrl(options: OAuth2Options) : string
    {
        return (new OAuth2(options)).authorizeUrl();
    }

    /**
     * OAuth2 Authorize URL Generator helper.
     */
    authorizeUrl() : string
    {
        const params = new URLSearchParams(this.options);

        return OAuth2.AUTHORIZATION_URL + '?' + params.toString();
    }

    /**
     * Initie le flow Authorization Code https://datatracker.ietf.org/doc/html/rfc6749#section-4.1
     */
    async getAuthorizationCode(custom?: OAuth2Options): Promise<GrantResponse> {
        const options = {...this.options, ...custom};
		const fn = oauth.authorizationCode(
			axios.create(),
			OAuth2.ACCESS_TOKEN_URL,
			options.client_id ?? '',
            options.client_secret ?? '',
			options.redirect_uri ?? "",
			options.code ?? "",
			options.scope ?? ""
		);
		return await fn(options.code ?? "", options.scope ?? "")
	}

    /**
     * Initie le flow Client Credentials https://datatracker.ietf.org/doc/html/rfc6749#section-4.4
     */
	async getClientCredentials(custom?: OAuth2Options): Promise<GrantResponse> {
        const options = {...this.options, ...custom};
		const fn = oauth.clientCredentials(
			axios.create(),
			OAuth2.ACCESS_TOKEN_URL,
			options.client_id ?? '',
            options.client_secret ?? ''
		);
		return await fn(options.scope ?? "");
	}

    /**
     * Refresh Token (https://datatracker.ietf.org/doc/html/rfc6749#section-1.5)
     */
	async refreshToken(refresh_token : string, custom?: OAuth2Options): Promise<RefreshResponse> {
        const options = {...this.options, ...custom};
		const fn = oauth.refreshToken(
            axios.create(),
            OAuth2.ACCESS_TOKEN_URL,
			options.client_id ?? '',
            options.client_secret ?? ''
        );
        return await fn(refresh_token);
	}
}