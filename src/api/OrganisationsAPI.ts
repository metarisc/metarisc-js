import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { AddOrganisationMembresRequest } from '../model/AddOrganisationMembresRequest';
import { GetOrganisationReglesDeci200Response } from '../model/GetOrganisationReglesDeci200Response';
import { Organisation } from '../model/Organisation';
import { OrganisationMembre } from '../model/OrganisationMembre';
import { WorkflowType } from '../model/WorkflowType';
import { OrganisationGeoservice } from '../model/OrganisationGeoservice';

export class OrganisationsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Ajout d'un utilisateur comme membre dans une organisation.
     * @param orgId Identifiant unique de l'Organisation
     * @param addOrganisationMembresRequest 
     */
    async addOrganisationMembres(orgId: string, addOrganisationMembresRequest?: AddOrganisationMembresRequest): Promise<AxiosResponse<OrganisationMembre>>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/membres'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'utilisateur_id': addOrganisationMembresRequest?.utilisateur_id } )
        });
    }
    
    /**
     * Récupération des détails d'une organisation.
     * @param orgId Identifiant unique de l'Organisation
     */
    async getOrganisation(orgId: string): Promise<AxiosResponse<Organisation>>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Ensemble de règles utilisées pour le calcul de la conformité et de la performance DECI.
     * @param orgId Identifiant unique de l'Organisation
     */
    async getOrganisationReglesDeci(orgId: string): Promise<AxiosResponse<GetOrganisationReglesDeci200Response>>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/regles-deci'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Retourne le référentiel du paramétrage des workflows pour l'organisation.
     * @param orgId Identifiant unique de l'Organisation
     */
    paginateOrganisationDossiersWorkflowsSuites(orgId: string): Collection<WorkflowType>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.collect<WorkflowType>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/dossiers-workflows-suites'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des géo-services d'une organisation.
     * @param orgId Identifiant unique de l'Organisation
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateOrganisationGeoservices(orgId: string, page?: number, perPage?: number): Collection<OrganisationGeoservice>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.collect<OrganisationGeoservice>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/geoservices'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des membres d'une organisation.
     * @param orgId Identifiant unique de l'Organisation
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateOrganisationMembres(orgId: string, page?: number, perPage?: number): Collection<OrganisationMembre>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.collect<OrganisationMembre>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/membres'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Liste paginée des organisations.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateOrganisations(page?: number, perPage?: number): Collection<Organisation>
    {
        const pathVariable = {  };
        return this.collect<Organisation>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
}
