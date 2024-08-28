import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { CommissionMembre } from '../model/CommissionMembre';

export class CommissionsMembresAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'un membre de commission existant.
     */
    async deleteMembre(membreId: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'membre_id': (new String(membreId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/commissions_membres/{membre_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération d'une fiche d'un membre d'une commission.
     */
    async getMembre(membreId: string): Promise<AxiosResponse<CommissionMembre>>
    {
        const pathVariable = { 'membre_id': (new String(membreId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions_membres/{membre_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste membres des commissions.
     */
    paginateMembres(page?: number, perPage?: number): Collection<CommissionMembre>
    {
        const pathVariable = { };
        return this.collect<CommissionMembre>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions_membres'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Mise à jour d'un membre de commission existant.
     */
    async updateMembre(membreId: string, params : { titre ? : string, presenceObligatoire ? : boolean }): Promise<AxiosResponse<CommissionMembre>>
    {
        const pathVariable = { 'membre_id': (new String(membreId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/commissions_membres/{membre_id}'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
}
