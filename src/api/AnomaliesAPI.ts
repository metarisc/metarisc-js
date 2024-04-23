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
     * Suppression d'une anomalie.
     * @param anomalieId Identifiant unique de l'anomalie
     */
    async deleteAnomalie(anomalieId: number): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'anomalie_id': anomalieId };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/anomalies/{anomalie_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Détails d'une anomalie.
     * @param anomalieId Identifiant unique de l'anomalie
     */
    async getAnomalie(anomalieId: number): Promise<AxiosResponse<AnomalieDECI>>
    {
        const pathVariable = { 'anomalie_id': anomalieId };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/anomalies/{anomalie_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Liste des anomalies.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     * @param texte Filtre sur le texte
     */
    paginateAnomalies(page?: number, perPage?: number, texte?: string): Collection<AnomalieDECI>
    {
        const pathVariable = {  };
        return this.collect<AnomalieDECI>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/anomalies'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString(), 'texte': texte },
            body: {}
        });
    }
    
    /**
     * Ajout d'une nouvelle anomalie.
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
            body:  { 'code': anomalieDECI?.code, 'texte': anomalieDECI?.texte, 'indice_de_gravite': anomalieDECI?.indice_de_gravite } 
        });
    }
    
}
