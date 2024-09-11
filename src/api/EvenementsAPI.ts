import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Evenement } from '../model/Evenement';
import { Utilisateur } from '../model/Utilisateur';

export class EvenementsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'un événement.
     */
    async deleteEvenement(evenementId: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'evenement_id': (new String(evenementId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/evenements/{evenement_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération des détails d'un événement correspondant à l'id donné.
     */
    async getEvenementDetails(evenementId: string): Promise<AxiosResponse<Evenement>>
    {
        const pathVariable = { 'evenement_id': (new String(evenementId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/evenements/{evenement_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération des détails de tous les événements calendaires existants.
     */
    paginateEvenements(page?: number, perPage?: number, period?: string, type?: string): Collection<Evenement>
    {
        const pathVariable = { };
        return this.collect<Evenement>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/evenements'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString(), 'period': period, 'type': type }
        });
    }
    
    /**
     * Récupération d'une liste paginée d'utilisateurs liés à un événement calendaire.
     */
    paginateEvenementUtilisateurs(evenementId: string, page?: number, perPage?: number): Collection<Utilisateur>
    {
        const pathVariable = { 'evenement_id': (new String(evenementId)).toString() };
        return this.collect<Utilisateur>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/evenements/{evenement_id}/utilisateurs'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() }
        });
    }
    
    /**
     * Création d'un événement.
     */
    async postEvenement(params : { title : string, type : string, date_debut : Date, date_fin : Date, description ? : string, }): Promise<AxiosResponse<Evenement>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/evenements'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
}
