export class OAuth2
{
    /**
     * OAuth2 Authorize URL Generator helper.
     */
    authorizeUrl(options : {
        response_type : string,
        client_id : string,
        redirect_uri ?: string,
        state ?: string,
        scope ?: string,
        [name: string]: string
    }) : string
    {
        const authorize_url = 'https://lemur-17.cloud-iam.com/auth/realms/metariscoidc/protocol/openid-connect/auth';
        const params = new URLSearchParams(options);

        return authorize_url + '?' + params.toString();
    }
}