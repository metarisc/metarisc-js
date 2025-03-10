// File generated from our OpenAPI spec
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
    deleteEvenement(
        evenementId: string
    ) : Promise<AxiosResponse<void>>
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
    getEvenementDetails(
        evenementId: string
    ) : Promise<AxiosResponse<Evenement>>
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
    paginateEvenements(
        period? : string,
        type? : 'DEFAUT' | 'RECONNAISSANCE_OPERATIONNELLE_ANNUELLE' | 'VISITE_PERIODIQUE' | 'COMMISSION_SECURITE'
    ) : Collection<Evenement>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/evenements'),
            params: { 'period': (new String(period)).toString(), 'type': (new String(type)).toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération d'une liste paginée d'utilisateurs liés à un événement calendaire.
     */
    paginateEvenementUtilisateurs(
        evenementId: string
    ) : Collection<Utilisateur>
    {
        const pathVariable = { 'evenement_id': (new String(evenementId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/evenements/{evenement_id}/utilisateurs'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Création d'un événement.
     */
    postEvenement(
        params : any
    ) : Promise<AxiosResponse<Evenement>>
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
