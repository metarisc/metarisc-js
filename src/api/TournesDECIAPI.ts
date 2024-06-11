import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { TourneeDeci } from '../model/TourneeDeci';
import { TourneeDeciPei } from '../model/TourneeDeciPei';

export class TournesDECIAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression du contrôle PEI de la tournée DECI.
     */
    async deleteTourneeDeciPei(tourneeDeciId: string, peiId: string ): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString(), 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}/pei/{pei_id}'),
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Génération d'un livret de tournée pour une tournée DECI.
     */
    async getTourneeDeciLivretDeTournee(tourneeDeciId: string ): Promise<AxiosResponse<HttpFile>>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}/livret_de_tournee'),
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération des détails liés au contrôle d'un PEI d'une tournée.
     */
    async getTourneeDeciPei(tourneeDeciId: string, peiId: string ): Promise<AxiosResponse<TourneeDeciPei>>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString(), 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}/pei/{pei_id}'),
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération des détails de la tournée DECI.
     */
    async getTourneeDeci(tourneeDeciId: string ): Promise<AxiosResponse<TourneeDeci>>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}'),
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des contrôles PEI liés à la tournée DECI.
     */
    paginateTourneeDeciPei(tourneeDeciId: string, page?: number, perPage?: number ): Collection<TourneeDeciPei>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString() };
        return this.collect<TourneeDeciPei>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}/pei'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Liste des tournées DECI.
     */
    paginateTourneesDeci(page?: number, perPage?: number, libelle?: string, periode?: string ): Collection<TourneeDeci>
    {
        const pathVariable = {  };
        return this.collect<TourneeDeci>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString(), 'libelle': libelle, 'periode': periode },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Mise à jour du PEI contrôlé dans une tournée DECI.
     */
    async updateTourneeDeciPei(tourneeDeciId: string, peiId: string, tourneeDeciPei?: TourneeDeciPei): Promise<AxiosResponse<TourneeDeciPei>>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString(), 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}/pei/{pei_id}'),
            params: {  },
            body: Utils.payloadFilter( { 'id': tourneeDeciPei?.id, 'date_du_controle': tourneeDeciPei?.date_du_controle ? Utils.formatDate(tourneeDeciPei?.date_du_controle) : undefined, 'liste_anomalies': tourneeDeciPei?.liste_anomalies, 'essais_engin_utilise': tourneeDeciPei?.essais_engin_utilise, 'pei_id': tourneeDeciPei?.pei_id, 'pei': tourneeDeciPei?.pei, 'est_controle': tourneeDeciPei?.est_controle, 'ordre': tourneeDeciPei?.ordre } )
        });
    }
    
    /**
     * Ajout d'un PEI sur la tournée DECI.
     */
    async postTourneeDeciPei(tourneeDeciId: string, tourneeDeciPei?: TourneeDeciPei): Promise<AxiosResponse<TourneeDeciPei>>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}/pei'),
            params: {  },
            body: Utils.payloadFilter( { 'id': tourneeDeciPei?.id, 'date_du_controle': tourneeDeciPei?.date_du_controle ? Utils.formatDate(tourneeDeciPei?.date_du_controle) : undefined, 'liste_anomalies': tourneeDeciPei?.liste_anomalies, 'essais_engin_utilise': tourneeDeciPei?.essais_engin_utilise, 'pei_id': tourneeDeciPei?.pei_id, 'pei': tourneeDeciPei?.pei, 'est_controle': tourneeDeciPei?.est_controle, 'ordre': tourneeDeciPei?.ordre } )
        });
    }
    
    /**
     * Mise à jour de la tournée DECI.
     */
    async updateTourneeDeci(tourneeDeciId: string, tourneeDeci?: TourneeDeci): Promise<AxiosResponse<TourneeDeci>>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}'),
            params: {  },
            body: Utils.payloadFilter(tourneeDeci)
        });
    }
    
    /**
     * Ajout d'une nouvelle tournée DECI.
     */
    async postTourneeDeci(tourneeDeci?: TourneeDeci): Promise<AxiosResponse<TourneeDeci>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci'),
            params: {  },
            body: Utils.payloadFilter(tourneeDeci)
        });
    }
    
}
