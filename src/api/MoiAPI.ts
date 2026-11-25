// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Utilisateur } from '../model/Utilisateur';

export class MoiAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * L'utilisateur connecté retourné par ce point de terminaison utilise le token d'accès généré par le service OpenID Connect afin de le lier à une identité connue de Metarisc. Si l'utilisateur est inconnu une erreur est retournée.
     */
    moi(
    ) : Promise<AxiosResponse<Utilisateur>>
    {
        const pathVariable = { };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/@moi'),
            transformResponse: [(data, _headers, status) => {
                if (!data) return data;
                if (status !== undefined && status >= 400) {
                    // Réponse d'erreur : on tente de parser le JSON (ex: application/problem+json)
                    // pour que error.response.data soit exploitable, sinon on garde le corps brut.
                    try {
                        return JSON.parse(data);
                    } catch {
                        return data;
                    }
                }
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.roles) {
                    parsedData.roles = new Set(parsedData.roles);
                }
                return parsedData;
            }]
        });
    }
    
}
