import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Commission } from '../model/Commission';
import { CommissionMembre } from '../model/CommissionMembre';
import { CommissionPreferences } from '../model/CommissionPreferences';
import { PassageCommission } from '../model/PassageCommission';

export class CommissionsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération des détails de la commission.
     */
    async getCommission(commissionId: string): Promise<AxiosResponse<Commission>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération des préférences de la commission.
     */
    async getCommissionPreferences(commissionId: string): Promise<AxiosResponse<CommissionPreferences>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/preferences'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Liste des commissions.
     */
    paginateCommissions(page?: number, perPage?: number): Collection<Commission>
    {
        const pathVariable = { };
        return this.collect<Commission>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des dates de passage de la commission.
     */
    paginateCommissionDates(commissionId: string, page?: number, perPage?: number): Collection<PassageCommission>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.collect<PassageCommission>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dates'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des membres de la commission.
     */
    paginateCommissionMembres(commissionId: string, page?: number, perPage?: number): Collection<CommissionMembre>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.collect<CommissionMembre>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/membres'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Ajoute une commission.
     */
    async postCommission(params : { type : string, libelle : string, presidenceId ? : string }): Promise<AxiosResponse<Commission>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/commissions'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'une date de passage en commission.
     */
    async postCommissionDate(commissionId: string, params : { dateDebut : Date, dateFin : Date, type : string, libelle : string, }): Promise<AxiosResponse<PassageCommission>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dates'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un membre dans la commission.
     */
    async postMembresCommission(commissionId: string, params : { titre : string, presenceObligatoire : boolean, }): Promise<AxiosResponse<CommissionMembre>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/membres'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Mise à jour des préférences de la commission.
     */
    async postCommissionPreferences(commissionId: string): Promise<AxiosResponse<CommissionPreferences>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/preferences'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
}
