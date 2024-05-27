import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { GetReglesDeciOrgOrganisations200Response } from '../model/GetReglesDeciOrgOrganisations200Response';
import { Organisation } from '../model/Organisation';
import { OrganisationMembre } from '../model/OrganisationMembre';
import { WorkflowType } from '../model/WorkflowType';
import { OrganisationGeoservice } from '../model/OrganisationGeoservice';

export class OrganisationsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération des détails d'une organisation.
     * @param orgId 
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
     * @param orgId 
     */
    async getOrganisationReglesDeci(orgId: string): Promise<AxiosResponse<GetReglesDeciOrgOrganisations200Response>>
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
     * @param orgId 
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
     * @param orgId 
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
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
     * @param orgId 
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
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
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
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
    
    /**
     * Ajout d'un utilisateur comme membre dans une organisation.
     * @param orgId 
     * @param organisationMembre 
     */
    async addOrganisationMembres(orgId: string, organisationMembre?: OrganisationMembre): Promise<AxiosResponse<OrganisationMembre>>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/membres'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'organisation': organisationMembre?.organisation, 'utilisateur_id': organisationMembre?.utilisateur_id, 'utilisateur': organisationMembre?.utilisateur, 'date_integration': organisationMembre?.date_integration ? Utils.formatDate(organisationMembre?.date_integration) : undefined, 'role': organisationMembre?.role } )
        });
    }
    
}
