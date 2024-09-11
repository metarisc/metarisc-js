import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { PassageCommission } from '../model/PassageCommission';
import { PassageCommissionDossier } from '../model/PassageCommissionDossier';

export class DatesPassageCommissionAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération d'une date de passage en commission.
     */
    async getCommissionDate(dateId: string): Promise<AxiosResponse<PassageCommission>>
    {
        const pathVariable = { 'date_id': (new String(dateId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dates_passage_commission/{date_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération d'une liste de dossiers à l'ordre du jour liés à une date de passage en commission.
     */
    paginateCommissionDateDossiers(dateId: string, page?: number, perPage?: number): Collection<PassageCommissionDossier>
    {
        const pathVariable = { 'date_id': (new String(dateId)).toString() };
        return this.collect<PassageCommissionDossier>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dates_passage_commission/{date_id}/ordre_du_jour'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() }
        });
    }
    
    /**
     * Ajout d'un dossier à l'ordre du jour d'un passage en commission.
     */
    async postCommissionDateDossier(dateId: string, params : { dossier_id : string, date_de_passage ? : Date }): Promise<AxiosResponse<PassageCommissionDossier>>
    {
        const pathVariable = { 'date_id': (new String(dateId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dates_passage_commission/{date_id}/ordre_du_jour'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
}
