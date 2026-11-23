// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { PassageAffectation } from '../model/PassageAffectation';

export class PassagesCommissionAffectationsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'une affectation d'un passage en commission.
     */
    deleteAffectation(
        affectationId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'affectation_id': (new String(affectationId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/passages_commission_affectations/{affectation_id}'),
            transformResponse: [(data, _headers, status) => {
                if (!data) return data;
                if (status !== undefined && status >= 400) {
                    return data;
                }
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération des détails d'une affectation d'un passage en commission.
     */
    getPassageAffectation(
        affectationId: string
    ) : Promise<AxiosResponse<PassageAffectation>>
    {
        const pathVariable = { 'affectation_id': (new String(affectationId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/passages_commission_affectations/{affectation_id}'),
            transformResponse: [(data, _headers, status) => {
                if (!data) return data;
                if (status !== undefined && status >= 400) {
                    return data;
                }
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.utilisateur?.roles) {
                    parsedData.utilisateur.roles = new Set(parsedData.utilisateur.roles);
                }
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des affectations des passages en commission.
     */
    paginatePassagesCommissionAffectations(
    ) : Collection<PassageAffectation>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/passages_commission_affectations'),
            transformResponse: [(data, _headers, status) => {
                if (!data) return data;
                if (status !== undefined && status >= 400) {
                    return data;
                }
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Mise à jour d'une affectation existante d'un passage en commission en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    patchPassageAffectation(
        affectationId: string,
        params : any
    ) : Promise<AxiosResponse<PassageAffectation>>
    {
        const pathVariable = { 'affectation_id': (new String(affectationId)).toString() };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/passages_commission_affectations/{affectation_id}'),
            transformResponse: [(data, _headers, status) => {
                if (!data) return data;
                if (status !== undefined && status >= 400) {
                    return data;
                }
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.utilisateur?.roles) {
                    parsedData.utilisateur.roles = new Set(parsedData.utilisateur.roles);
                }
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajoute une affectation (rapporteur) à un passage en commission. Vous pouvez affecter plusieurs personnes, y compris vous-même. Cela permet de débloquer des droits spécifiques sur le traitement du passage en commission.
     */
    postPassageAffectation(
        params : any
    ) : Promise<AxiosResponse<PassageAffectation>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/passages_commission_affectations'),
            transformResponse: [(data, _headers, status) => {
                if (!data) return data;
                if (status !== undefined && status >= 400) {
                    return data;
                }
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.utilisateur?.roles) {
                    parsedData.utilisateur.roles = new Set(parsedData.utilisateur.roles);
                }
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
}
