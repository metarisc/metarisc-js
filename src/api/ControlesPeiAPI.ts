import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { TourneeDeciPei } from '../model/TourneeDeciPei';

export class ControlesPeiAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression du contrôle PEI de la tournée DECI.
     */
    async deleteControle(peiId: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/controles_pei/{pei_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération des détails liés au contrôle d'un PEI d'une tournée.
     */
    async getControle(peiId: string): Promise<AxiosResponse<TourneeDeciPei>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/controles_pei/{pei_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Mise à jour du PEI contrôlé.
     */
    async updateControle(peiId: string, params : { dateDuControle? : Date, listeAnomalies? : { }, essaisEnginUtilise? : string, ordre? : number }): Promise<AxiosResponse<TourneeDeciPei>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/controles_pei/{pei_id}'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
}
