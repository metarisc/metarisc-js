import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Organisation } from '../model/Organisation';
import { OrganisationGeoservice } from '../model/OrganisationGeoservice';
import { OrganisationMembre } from '../model/OrganisationMembre';
import { ReglesDeci } from '../model/ReglesDeci';
import { WorkflowType } from '../model/WorkflowType';

export class OrganisationsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération des détails d'une organisation.
     */
    async getOrganisation(orgId: string): Promise<AxiosResponse<Organisation>>
    {

        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Ensemble de règles utilisées pour le calcul de la conformité et de la performance DECI.
     */
    async getOrganisationReglesDeci(orgId: string): Promise<AxiosResponse<ReglesDeci>>
    {

        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/regles-deci'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Retourne le référentiel du paramétrage des workflows pour l'organisation.
     */
    paginateOrganisationDossiersWorkflowsSuites(orgId: string): Collection<WorkflowType>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.collect<WorkflowType>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/dossiers-workflows-suites'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des géo-services d'une organisation.
     */
    paginateOrganisationGeoservices(orgId: string, page?: number, perPage?: number): Collection<OrganisationGeoservice>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.collect<OrganisationGeoservice>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/geoservices'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des membres d'une organisation.
     */
    paginateOrganisationMembres(orgId: string, page?: number, perPage?: number): Collection<OrganisationMembre>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.collect<OrganisationMembre>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/membres'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Liste paginée des organisations.
     */
    paginateOrganisations(page?: number, perPage?: number): Collection<Organisation>
    {
        const pathVariable = { };
        return this.collect<Organisation>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Ajout d'un un géo-service à une organisation.
     */
    async postOrganisationGeoservices(orgId: string, params : { nom : string, type : string, url : string, }): Promise<AxiosResponse<OrganisationGeoservice>>
    {

        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/geoservices'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un utilisateur comme membre dans une organisation.
     */
    async addOrganisationMembres(orgId: string, params : { utilisateurId : string, role : string, }): Promise<AxiosResponse<OrganisationMembre>>
    {

        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/membres'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Mise à jour de l'ensemble des règles utilisées pour le calcul de la conformité et de la performance DECI.
     */
    async postOrganisationReglesDeci(orgId: string, params : { pibiConformiteMatriceSeuilPesee1barParNature? : { [key: string]: number; }, pibiPerformanceNaturesPerformanceRestreinte? : { }, pibiPerformanceNaturesAReformer? : { }, pibiPerformanceSeuilPesee1bar? : number, pibiConformiteSeuilSurpression? : number, pibiConformiteMatriceSeuilPesee1barParDefaut? : number, penaConformiteSeuilVolumeCiterne? : number }): Promise<AxiosResponse<ReglesDeci>>
    {

        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/regles-deci'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
}
