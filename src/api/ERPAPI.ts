import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { PaginateErp200Response } from '../model/PaginateErp200Response';

export class ERPAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération de la liste des ERP.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    async paginateErp(page?: number, perPage?: number): Promise<AxiosResponse<PaginateErp200Response>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
}
