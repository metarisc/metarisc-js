import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { ERP } from '../model/ERP';

export class ERPAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération des détails de l'ERP.
     * @param erpId Identifiant unique de l'ERP
     */
    async getErp(erpId: string): Promise<AxiosResponse<ERP>>
    {
        const pathVariable = { 'erp_id': erpId };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Récupération de la liste des ERP.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateErp(page?: number, perPage?: number): Collection<ERP>
    {
        const pathVariable = {  };
        return this.collect<ERP>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
}
