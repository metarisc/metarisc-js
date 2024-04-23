import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { PostTourneeDeciPeiRequest } from '../model/PostTourneeDeciPeiRequest';
import { PostTourneeDeciRequest } from '../model/PostTourneeDeciRequest';
import { TourneeDeci } from '../model/TourneeDeci';
import { TourneeDeciPei } from '../model/TourneeDeciPei';
import { UpdateTourneeDeciPeiRequest } from '../model/UpdateTourneeDeciPeiRequest';
import { UpdateTourneeDeciRequest } from '../model/UpdateTourneeDeciRequest';

export class TournesDECIAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression du contrôle PEI de la tournée DECI.
     * @param tourneeDeciId Identifiant de la tournée DECI
     * @param peiId Identifiant du PEI lié au contrôle
     */
    async deleteTourneeDeciPei(tourneeDeciId: string, peiId: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString(), 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}/pei/{pei_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Récupération des détails de la tournée DECI.
     * @param tourneeDeciId Identifiant de la tournée DECI
     */
    async getTourneeDeci(tourneeDeciId: string): Promise<AxiosResponse<TourneeDeci>>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Génération d'un livret de tournée pour une tournée DECI.
     * @param tourneeDeciId Identifiant de la tournée DECI
     */
    async getTourneeDeciLivretDeTournee(tourneeDeciId: string): Promise<AxiosResponse<any>>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}/livret_de_tournee'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Récupération des détails liés au contrôle d'un PEI d'une tournée.
     * @param tourneeDeciId Identifiant de la tournée DECI
     * @param peiId Identifiant du PEI lié au contrôle
     */
    async getTourneeDeciPei(tourneeDeciId: string, peiId: string): Promise<AxiosResponse<TourneeDeciPei>>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString(), 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}/pei/{pei_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Récupération de la liste des contrôles PEI liés à la tournée DECI.
     * @param tourneeDeciId Identifiant de la tournée DECI
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateTourneeDeciPei(tourneeDeciId: string, page?: number, perPage?: number): Collection<TourneeDeciPei>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString() };
        return this.collect<TourneeDeciPei>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}/pei'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
    /**
     * Liste des tournées DECI.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     * @param libelle Filtre sur le libellé
     * @param periode Filtre sur les dates
     */
    paginateTourneesDeci(page?: number, perPage?: number, libelle?: string, periode?: string): Collection<TourneeDeci>
    {
        const pathVariable = {  };
        return this.collect<TourneeDeci>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString(), 'libelle': libelle, 'periode': periode },
            body: {}
        });
    }
    
    /**
     * Ajout d'une nouvelle tournée DECI.
     * @param postTourneeDeciRequest 
     */
    async postTourneeDeci(postTourneeDeciRequest?: PostTourneeDeciRequest): Promise<AxiosResponse<TourneeDeci>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci'),
            headers: {  },
            params: {  },
            body:  { 'libelle': postTourneeDeciRequest?.libelle, 'description': postTourneeDeciRequest?.description, 'date_de_debut': postTourneeDeciRequest?.date_de_debut, 'date_de_fin': postTourneeDeciRequest?.date_de_fin, 'mois_debut': postTourneeDeciRequest?.mois_debut, 'mois_fin': postTourneeDeciRequest?.mois_fin, 'modele_id': postTourneeDeciRequest?.modele_id, 'type': postTourneeDeciRequest?.type } 
        });
    }
    
    /**
     * Ajout d'un PEI sur la tournée DECI.
     * @param tourneeDeciId Identifiant de la tournée DECI
     * @param postTourneeDeciPeiRequest 
     */
    async postTourneeDeciPei(tourneeDeciId: string, postTourneeDeciPeiRequest?: PostTourneeDeciPeiRequest): Promise<AxiosResponse<TourneeDeciPei>>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}/pei'),
            headers: {  },
            params: {  },
            body:  { 'pei_id': postTourneeDeciPeiRequest?.pei_id, 'ordre': postTourneeDeciPeiRequest?.ordre } 
        });
    }
    
    /**
     * Mise à jour de la tournée DECI.
     * @param tourneeDeciId Identifiant de la tournée DECI
     * @param updateTourneeDeciRequest 
     */
    async updateTourneeDeci(tourneeDeciId: string, updateTourneeDeciRequest?: UpdateTourneeDeciRequest): Promise<AxiosResponse<TourneeDeci>>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}'),
            headers: {  },
            params: {  },
            body:  { 'libelle': updateTourneeDeciRequest?.libelle, 'description': updateTourneeDeciRequest?.description, 'date_de_debut': updateTourneeDeciRequest?.date_de_debut, 'date_de_fin': updateTourneeDeciRequest?.date_de_fin, 'mois_debut': updateTourneeDeciRequest?.mois_debut, 'mois_fin': updateTourneeDeciRequest?.mois_fin } 
        });
    }
    
    /**
     * Mise à jour du PEI contrôlé dans une tournée DECI.
     * @param tourneeDeciId Identifiant de la tournée DECI
     * @param peiId Identifiant du PEI lié au contrôle
     * @param updateTourneeDeciPeiRequest 
     */
    async updateTourneeDeciPei(tourneeDeciId: string, peiId: string, updateTourneeDeciPeiRequest?: UpdateTourneeDeciPeiRequest): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString(), 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}/pei/{pei_id}'),
            headers: {  },
            params: {  },
            body:  { 'engin_utilise': updateTourneeDeciPeiRequest?.engin_utilise, 'ordre': updateTourneeDeciPeiRequest?.ordre, 'date_du_controle': updateTourneeDeciPeiRequest?.date_du_controle, 'liste_anomalies': updateTourneeDeciPeiRequest?.liste_anomalies } 
        });
    }
    
}
