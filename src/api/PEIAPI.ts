import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { PEI } from '../model/PEI';
import { PostPeiRequest } from '../model/PostPeiRequest';
import { Contact } from '../model/Contact';
import { DescriptifTechniqueDECI } from '../model/DescriptifTechniqueDECI';
import { PieceJointe } from '../model/PieceJointe';

export class PEIAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération de l'ensemble des données d'un PEI.
     * @param peiId Identifiant unique du PEI
     */
    async getPei(peiId: string): Promise<AxiosResponse<PEI>>
    {
        const pathVariable = { 'pei_id': peiId };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Récupération de la liste des Points d'Eau Incendie (PEI) selon des critères de recherche.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     * @param geojson Filtre sur la position des PEI
     */
    paginatePei(page?: number, perPage?: number, geojson?: string): Collection<PEI>
    {
        const pathVariable = {  };
        return this.collect<PEI>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString(), 'geojson': geojson },
            body: {}
        });
    }
    
    /**
     * Récupération de la liste des contacts d'un Point d'Eau Incendie.
     * @param peiId Identifiant unique du PEI
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginatePeiContacts(peiId: string, page?: number, perPage?: number): Collection<Contact>
    {
        const pathVariable = { 'pei_id': peiId };
        return this.collect<Contact>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/contacts'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
    /**
     * Récupération de l'historique d'un POI.
     * @param peiId Identifiant unique du PEI
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginatePeiHistorique(peiId: string, page?: number, perPage?: number): Collection<DescriptifTechniqueDECI>
    {
        const pathVariable = { 'pei_id': peiId };
        return this.collect<DescriptifTechniqueDECI>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/historique'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
    /**
     * Récupération de la liste des pièces jointes d'un Point d'Eau Incendie.
     * @param peiId Identifiant unique du PEI
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginatePeiPiecesJointes(peiId: string, page?: number, perPage?: number): Collection<PieceJointe>
    {
        const pathVariable = { 'pei_id': peiId };
        return this.collect<PieceJointe>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/pieces_jointes'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
    /**
     * Ajout d'un PEI.
     * @param postPeiRequest 
     */
    async postPei(postPeiRequest?: PostPeiRequest): Promise<AxiosResponse<PEI>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/pei'),
            headers: {  },
            params: {  },
            body:  { 'implantation': postPeiRequest?.implantation, 'numero': postPeiRequest?.numero, 'numero_compteur': postPeiRequest?.numero_compteur, 'numero_serie_appareil': postPeiRequest?.numero_serie_appareil, 'descriptif_technique': postPeiRequest?.descriptif_technique } 
        });
    }
    
}
