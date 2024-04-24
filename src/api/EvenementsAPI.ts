import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Evenement } from '../model/Evenement';
import { PostEvenementRequest } from '../model/PostEvenementRequest';
import { Utilisateur } from '../model/Utilisateur';

export class EvenementsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'un événement correspondant à l'id donné.
     * @param evenementId Identifiant unique de l'Événement
     */
    async deleteEvenement(evenementId: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'evenement_id': (new String(evenementId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/evenements/{evenement_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Récupération des détails d'un événement correspondant à l'id donné.
     * @param evenementId Identifiant unique de l'Événement
     * @param evenement 
     */
    async getEvenementDetails(evenementId: string, evenement?: Evenement): Promise<AxiosResponse<Evenement>>
    {
        const pathVariable = { 'evenement_id': (new String(evenementId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/evenements/{evenement_id}'),
            headers: {  },
            params: {  },
            body:  { 'id': evenement?.id, 'title': evenement?.title, 'type': evenement?.type, 'description': evenement?.description, 'date_debut': Utils.formatDate(evenement?.date_debut), 'date_fin': Utils.formatDate(evenement?.date_fin) } 
        });
    }
    
    /**
     * Récupération d'une liste paginée d'utilisateurs liés à un événement calendaire.
     * @param evenementId Identifiant unique de l'Événement
     * @param page Le numéro de la page.
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginateEvenementUtilisateurs(evenementId: string, page?: number, perPage?: number): Collection<Utilisateur>
    {
        const pathVariable = { 'evenement_id': (new String(evenementId)).toString() };
        return this.collect<Utilisateur>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/evenements/{evenement_id}/utilisateurs'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
    /**
     * Récupération des détails de tous les événements calendaires existants.
     * @param page Le numéro de la page.
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     * @param type Le type d'événement 
     * @param period la période (ISO 8601) séparée par un slash (/) pendant laquelle l'événement se déroule. Exemple 2004-12-02T23:00/2005-01-01T12:30
     */
    paginateEvenements(page?: number, perPage?: number, type?: string, period?: string): Collection<Evenement>
    {
        const pathVariable = {  };
        return this.collect<Evenement>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/evenements'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString(), 'type': type, 'period': period },
            body: {}
        });
    }
    
    /**
     * TODO : Création d'un événement.
     * @param postEvenementRequest 
     */
    async postEvenement(postEvenementRequest?: PostEvenementRequest): Promise<AxiosResponse<Evenement>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/evenements'),
            headers: {  },
            params: {  },
            body:  { 'title': postEvenementRequest?.title, 'type': postEvenementRequest?.type, 'description': postEvenementRequest?.description, 'date_debut': Utils.formatDate(postEvenementRequest?.date_debut), 'date_fin': Utils.formatDate(postEvenementRequest?.date_fin) } 
        });
    }
    
}
