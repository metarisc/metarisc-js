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
     * @param commissionId 
     */
    async getCommission(commissionId: string): Promise<AxiosResponse<Commission>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération d'une date de passage en commission.
     * @param commissionId 
     * @param dateId 
     */
    async getCommissionDate(commissionId: string, dateId: string): Promise<AxiosResponse<PassageCommission>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString(), 'date_id': (new String(dateId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dates/{date_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Liste des commissions.
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginateCommissions(page?: number, perPage?: number): Collection<Commission>
    {
        const pathVariable = {  };
        return this.collect<Commission>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des dates de passage de la commission.
     * @param commissionId 
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginateCommissionDates(commissionId: string, page?: number, perPage?: number): Collection<PassageCommission>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.collect<PassageCommission>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dates'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Mise à jour des détails d'un dossier lié à une date de passage en commission
     * @param commissionId 
     * @param dateId 
     * @param dossierId 
     * @param passageCommissionDossier 
     */
    updateCommissionDateDossier(commissionId: string, dateId: string, dossierId: string, passageCommissionDossier?: PassageCommissionDossier): Collection<PassageCommissionDossier>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString(), 'date_id': (new String(dateId)).toString(), 'dossier_id': (new String(dossierId)).toString() };
        return this.collect<PassageCommissionDossier>({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dates/{date_id}/ordre_du_jour/{dossier_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': passageCommissionDossier?.id, 'dossier': passageCommissionDossier?.dossier, 'dossier_id': passageCommissionDossier?.dossier_id, 'avis': passageCommissionDossier?.avis, 'statut': passageCommissionDossier?.statut } )
        });
    }
    
    /**
     * Récupération d'une liste de dossiers à l'ordre du jour liés à une date de passage en commission.
     * @param commissionId 
     * @param dateId 
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginateCommissionDateDossiers(commissionId: string, dateId: string, page?: number, perPage?: number): Collection<PassageCommissionDossier>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString(), 'date_id': (new String(dateId)).toString() };
        return this.collect<PassageCommissionDossier>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dates/{date_id}/ordre_du_jour'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Ajoute une commission.
     * @param commission 
     */
    async postCommission(commission?: Commission): Promise<AxiosResponse<Commission>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/commissions'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': commission?.id, 'type': commission?.type, 'libelle': commission?.libelle } )
        });
    }
    
    /**
     * Ajout d'une date de passage en commission.
     * @param commissionId 
     * @param passageCommission 
     */
    async postCommissionDate(commissionId: string, passageCommission?: PassageCommission): Promise<AxiosResponse<PassageCommission>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dates'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': passageCommission?.id, 'date_debut': passageCommission?.date_debut ? Utils.formatDate(passageCommission?.date_debut) : undefined, 'date_fin': passageCommission?.date_fin ? Utils.formatDate(passageCommission?.date_fin) : undefined, 'type': passageCommission?.type, 'libelle': passageCommission?.libelle } )
        });
    }
    
    /**
     * Ajout d'un dossier à l'ordre du jour d'un passage en commission.
     * @param commissionId 
     * @param dateId 
     * @param passageCommissionDossier 
     */
    async postCommissionDateDossier(commissionId: string, dateId: string, passageCommissionDossier?: PassageCommissionDossier): Promise<AxiosResponse<PassageCommissionDossier>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString(), 'date_id': (new String(dateId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dates/{date_id}/ordre_du_jour'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': passageCommissionDossier?.id, 'dossier': passageCommissionDossier?.dossier, 'dossier_id': passageCommissionDossier?.dossier_id, 'avis': passageCommissionDossier?.avis, 'statut': passageCommissionDossier?.statut } )
        });
    }
    
}
