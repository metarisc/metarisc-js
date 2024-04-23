import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { ERP } from '../model/ERP';
import { Contact } from '../model/Contact';
import { PieceJointe } from '../model/PieceJointe';

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
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
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
    
    /**
     * Récupération de la liste des contacts d'un ERP.
     * @param erpId Identifiant unique de l'ERP
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateErpContacts(erpId: string, page?: number, perPage?: number): Collection<Contact>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect<Contact>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/contacts'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
    /**
     * Récupération de la liste des documents d'un ERP.
     * @param erpId Identifiant unique de l'ERP
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateErpDocuments(erpId: string, page?: number, perPage?: number): Collection<PieceJointe>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect<PieceJointe>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/documents'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
}
