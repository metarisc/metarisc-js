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
     * Suppression d'une anomalie DECI type.
     * @param anomalieId 
     */
    async deleteAnomalie(anomalieId: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'anomalie_id': (new String(anomalieId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/anomalies/{anomalie_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Détails d'une anomalie type DECI.
     * @param anomalieId 
     */
    async getAnomalie(anomalieId: string): Promise<AxiosResponse<AnomalieDECI>>
    {
        const pathVariable = { 'anomalie_id': (new String(anomalieId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/anomalies/{anomalie_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Liste des anomalies.
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     * @param texte Filtre sur le texte de l'anomalie
     */
    paginateAnomalies(page?: number, perPage?: number, texte?: string): Collection<AnomalieDECI>
    {
        const pathVariable = {  };
        return this.collect<AnomalieDECI>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/anomalies'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString(), 'texte': texte },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Ajout d'une nouvelle anomalie DECI type pour une organisation.
     * @param anomalieDECI 
     */
    async postAnomalie(anomalieDECI?: AnomalieDECI): Promise<AxiosResponse<AnomalieDECI>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/anomalies'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'code': anomalieDECI?.code, 'texte': anomalieDECI?.texte, 'indice_de_gravite': anomalieDECI?.indice_de_gravite } )
        });
    }
    
}
