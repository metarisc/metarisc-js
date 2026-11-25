// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import { Client } from "../client";
import { Collection } from "../collection";
import { ERP } from '../model/ERP';

export class SearchAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Recherche d'ERP selon des critères simples.
Cet endpoint de recherche permet de saffranchir des limitations de la recherche par query parameters (notamment le nombre de critères).

     */
    paginateErp(
        params : any
    ) : Collection<ERP>
    {
        const pathVariable = { };
        return this.collect({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/search/erp'),
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
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
}
