// File generated from our OpenAPI spec
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
    deleteAnomalie(
        anomalieId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'anomalie_id': (new String(anomalieId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/anomalies/{anomalie_id}'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Détails d'une anomalie type DECI présente dans la bibliothèque DECI.
     */
    getAnomalie(
        anomalieId: string
    ) : Promise<AxiosResponse<AnomalieDECI>>
    {
        const pathVariable = { 'anomalie_id': (new String(anomalieId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/anomalies/{anomalie_id}'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Retourne une liste des anomalies types dans la bibliothèque DECI.
     */
    paginateAnomalies(
        sort? : 'code' | '-code',
        texte? : string,
        code? : number
    ) : Collection<AnomalieDECI>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/anomalies'),
            params: Utils.payloadFilter({ 'sort': (new String(sort)).toString(), 'texte': (new String(texte)).toString(), 'code': (new String(code)).toString() }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Ajout d'une nouvelle anomalie DECI type dans la bibliothèque DECI.
     */
    postAnomalie(
        params : any
    ) : Promise<AxiosResponse<AnomalieDECI>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/anomalies'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter(params)
        });
    }
    
}
