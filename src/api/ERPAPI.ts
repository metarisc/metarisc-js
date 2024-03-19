import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import { Client } from "../client";
import { Collection } from "../collection";
import { ERP } from '../model/ERP';

export class ERPAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
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
