import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { POI } from '../model/POI';
import { PatchPoiRequest } from '../model/PatchPoiRequest';

import { Contact } from '../model/Contact';

import { DescriptifTechnique } from '../model/DescriptifTechnique';

import { PieceJointe } from '../model/PieceJointe';

export class POIAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération de l'ensemble des données d'un POI.
     * @param poiId ID du POI
     */
    async getPoi(poiId: string): Promise<AxiosResponse<POI>>
    {
        const pathVariable = { 'poi_id': poiId };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/poi/{poi_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Récupération de la liste des contacts d'un POI.
     * @param poiId ID du POI
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateContacts(poiId: string, page?: number, perPage?: number): Collection<Contact>
    {
        const pathVariable = { 'poi_id': poiId };
        return this.collect<Contact>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/poi/{poi_id}/contacts'),
            headers: {  },
            params: { 'page': page.toString(), 'per_page': perPage.toString() },
            body: {}
        });
    }
    
    /**
     * Récupération de l'historique d'un POI.
     * @param poiId ID du POI
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateHistorique(poiId: string, page?: number, perPage?: number): Collection<DescriptifTechnique>
    {
        const pathVariable = { 'poi_id': poiId };
        return this.collect<DescriptifTechnique>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/poi/{poi_id}/historique'),
            headers: {  },
            params: { 'page': page.toString(), 'per_page': perPage.toString() },
            body: {}
        });
    }
    
    /**
     * Récupération de la liste des pièces jointes d'un POI.
     * @param poiId ID du POI
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginatePiecesJointes(poiId: string, page?: number, perPage?: number): Collection<PieceJointe>
    {
        const pathVariable = { 'poi_id': poiId };
        return this.collect<PieceJointe>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/poi/{poi_id}/pieces_jointes'),
            headers: {  },
            params: { 'page': page.toString(), 'per_page': perPage.toString() },
            body: {}
        });
    }
    
    /**
     * Récupération de la liste des POI selon des critères de recherche.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginatePoi(page?: number, perPage?: number): Collection<POI>
    {
        const pathVariable = {  };
        return this.collect<POI>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/poi/'),
            headers: {  },
            params: { 'page': page.toString(), 'per_page': perPage.toString() },
            body: {}
        });
    }
    
    /**
     * Modifier un POI existant.
     * @param poiId ID du POI
     * @param patchPoiRequest 
     */
    async patchPoi(poiId: string, patchPoiRequest?: PatchPoiRequest): Promise<AxiosResponse<POI>>
    {
        const pathVariable = { 'poi_id': poiId };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/poi/{poi_id}'),
            headers: {  },
            params: {  },
            body:  { 'test': patchPoiRequest?.test } 
        });
    }
    
}
