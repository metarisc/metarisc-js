import { OAuth2Options } from "../core";

export class OAuth2
{
    public static AUTHORIZATION_URL = 'https://id.metarisc.fr/auth/realms/production/protocol/openid-connect/auth';
    public static ACCESS_TOKEN_URL  = 'https://id.metarisc.fr/auth/realms/production/protocol/openid-connect/token';
 
    /**
     * Utilisation d'OAuth2 pour récupérer un access token utilisable dans Metarisc.
     *
     * La configuration doit contenir au moins :
     * - CLIENT_ID (Le client_id de l'application inscrite sur Metarisc ID pour communiquer avec Metarisc)
     * - CLIENT_SECRET (Le client_secret de l'application inscrite sur Metarisc ID pour communiquer avec Metarisc)
     *
     * La configuration peut contenir aussi :
     * - ACCESS_TOKEN_URL
     **/

    /**
     * OAuth2 Authorize URL Generator helper.
     */
    public static authorizeUrl(options: OAuth2Options) : string
    {
        const params = new URLSearchParams(options);

        return OAuth2.AUTHORIZATION_URL + '?' + params.toString();
    }
}