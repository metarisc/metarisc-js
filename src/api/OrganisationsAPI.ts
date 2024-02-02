import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Organisation } from '../model/Organisation';

export class OrganisationsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération des détails d'une organisation.
     * @param orgId Identifiant unique de l'Organisation
     */
    async getOrganisation(orgId: string): Promise<AxiosResponse<Organisation>>
    {
        const pathVariable = { 'org_id': orgId };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Liste paginée des organisations.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateOrganisations(page?: number, perPage?: number): Collection<Organisation>
    {
        const pathVariable = {  };
        return this.collect<Organisation>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
}
