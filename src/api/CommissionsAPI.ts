import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Commission } from '../model/Commission';
import { PassageCommission } from '../model/PassageCommission';
import { PassageCommissionDossier } from '../model/PassageCommissionDossier';

export class CommissionsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération des détails de la commission.
     * @param commissionId Identifiant unique de la commission
     */
    getCommission(commissionId: string): Collection<Commission>
    {
        const pathVariable = { 'commission_id': commissionId };
        return this.collect<Commission>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Récupération d'une date de passage en commission.
     * @param commissionId Identifiant unique de la commission
     * @param dateId Identifiant unique du passage en commission
     */
    async getCommissionDate(commissionId: string, dateId: string): Promise<AxiosResponse<PassageCommission>>
    {
        const pathVariable = { 'commission_id': commissionId, 'date_id': dateId };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dates/{date_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Récupération d'une liste de dossiers à l'ordre du jour liés à une date de passage en commission.
     * @param commissionId Identifiant unique de la commission
     * @param dateId Identifiant unique du passage en commission
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateCommissionDateDossiers(commissionId: string, dateId: string, page?: number, perPage?: number): Collection<PassageCommissionDossier>
    {
        const pathVariable = { 'commission_id': commissionId, 'date_id': dateId };
        return this.collect<PassageCommissionDossier>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dates/{date_id}/ordre_du_jour'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
    /**
     * Récupération de la liste des dates de passage de la commission.
     * @param commissionId Identifiant unique de la commission
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateCommissionDates(commissionId: string, page?: number, perPage?: number): Collection<PassageCommission>
    {
        const pathVariable = { 'commission_id': commissionId };
        return this.collect<PassageCommission>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dates'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
    /**
     * Liste des commissions.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateCommissions(page?: number, perPage?: number): Collection<Commission>
    {
        const pathVariable = {  };
        return this.collect<Commission>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
}
