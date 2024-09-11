import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { AnomalieDECI } from '../model/AnomalieDECI';

export class AnomaliesAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'une anomalie DECI type dans la bibliothèque DECI.
     */
    async deleteAnomalie(anomalieId: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'anomalie_id': (new String(anomalieId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/anomalies/{anomalie_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Détails d'une anomalie type DECI présente dans la bibliothèque DECI.
     */
    async getAnomalie(anomalieId: string): Promise<AxiosResponse<AnomalieDECI>>
    {
        const pathVariable = { 'anomalie_id': (new String(anomalieId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/anomalies/{anomalie_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Retourne une liste des anomalies types dans la bibliothèque DECI.
     */
    paginateAnomalies(page?: number, perPage?: number, sort?: string, texte?: string, code?: string): Collection<AnomalieDECI>
    {
        const pathVariable = { };
        return this.collect<AnomalieDECI>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/anomalies'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString(), 'sort': sort, 'texte': texte, 'code': code }
        });
    }
    
    /**
     * Ajout d'une nouvelle anomalie DECI type dans la bibliothèque DECI.
     */
    async postAnomalie(params : { code : number, texte : string, indice_de_gravite : number, }): Promise<AxiosResponse<AnomalieDECI>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/anomalies'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
}
