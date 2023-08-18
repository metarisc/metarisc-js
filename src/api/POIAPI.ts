import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from 'axios';
import { POI } from '../../src/model/POI';
import { PaginateContacts200Response } from '../../src/model/PaginateContacts200Response';
import { PaginateHistorique200Response } from '../../src/model/PaginateHistorique200Response';
import { PaginatePoi200Response } from '../../src/model/PaginatePoi200Response';

export class POIAPI extends Core {
    constructor(config : MetariscConfig) {
        super(config);
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
     */
    paginateContacts(poiId: string): AsyncGenerator<PaginateContacts200Response>
    {
        const pathVariable = { 'poi_id': poiId };
        return this.autoPagingIterator({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/poi/{poi_id}/contacts'),
            headers: {  },
            params: {  },
            body: {}
        });
    }

    /**
     * Récupération de l'historique d'un POI.
     * @param poiId ID du POI
     */
    paginateHistorique(poiId: string): AsyncGenerator<PaginateHistorique200Response>
    {
        const pathVariable = { 'poi_id': poiId };
        return this.autoPagingIterator({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/poi/{poi_id}/historique'),
            headers: {  },
            params: {  },
            body: {}
        });
    }

    /**
     * Récupération de la liste des pièces jointes d'un POI.
     * @param poiId ID du POI
     */
    paginatePiecesJointes(poiId: string): AsyncGenerator<PaginateContacts200Response>
    {
        const pathVariable = { 'poi_id': poiId };
        return this.autoPagingIterator({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/poi/{poi_id}/pieces_jointes'),
            headers: {  },
            params: {  },
            body: {}
        });
    }

    /**
     * Récupération de la liste des POI selon des critères de recherche.
     */
    paginatePoi(): AsyncGenerator<PaginatePoi200Response>
    {
        const pathVariable = {  };
        return this.autoPagingIterator({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/poi/'),
            headers: {  },
            params: {  },
            body: {}
        });
    }

    /**
     * Modifier un POI existant.
     * @param poiId ID du POI
     */
    async patchPoi(poiId: string): Promise<AxiosResponse<POI>>
    {
        const pathVariable = { 'poi_id': poiId };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/poi/{poi_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
}
