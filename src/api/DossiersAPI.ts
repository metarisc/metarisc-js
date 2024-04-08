import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Dossier } from '../model/Dossier';
import { PostDossierRequest } from '../model/PostDossierRequest';
import { Workflow } from '../model/Workflow';
import { Tag } from '../model/Tag';
import { PieceJointe } from '../model/PieceJointe';

export class DossiersAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération de l'ensemble des données d'un dossier.
     * @param dossierId Identifiant unique du Dossier
     */
    async getDossier(dossierId: string): Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'dossier_id': dossierId };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Récupération des détails d'un workflow.
     * @param dossierId Identifiant unique du Dossier
     * @param workflowId Identifiant unique du Workflow
     */
    async getDossierWorkflowsDetails(dossierId: string, workflowId: string): Promise<AxiosResponse<Workflow>>
    {
        const pathVariable = { 'dossier_id': dossierId, 'workflow_id': workflowId };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows/{workflow_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Récupération de la liste des contacts d'un dossier.
     * @param dossierId Identifiant unique du Dossier
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateDossierContacts(dossierId: string, page?: number, perPage?: number): Collection<Workflow>
    {
        const pathVariable = { 'dossier_id': dossierId };
        return this.collect<Workflow>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/contacts'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
    /**
     * Récupération de la liste des documents d'un dossier.
     * @param dossierId Identifiant unique du Dossier
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateDossierDocuments(dossierId: string, page?: number, perPage?: number): Collection<Workflow>
    {
        const pathVariable = { 'dossier_id': dossierId };
        return this.collect<Workflow>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/documents'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
    /**
     * Récupération de la liste des tags d'un dossier.
     * @param dossierId Identifiant unique du Dossier
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateDossierTags(dossierId: string, page?: number, perPage?: number): Collection<Tag>
    {
        const pathVariable = { 'dossier_id': dossierId };
        return this.collect<Tag>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/tags'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
    /**
     * Liste des documents liés à un workflow.
     * @param dossierId Identifiant unique du Dossier
     * @param workflowId Identifiant unique du Workflow
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateDossierWorkflowDocuments(dossierId: string, workflowId: string, page?: number, perPage?: number): Collection<PieceJointe>
    {
        const pathVariable = { 'dossier_id': dossierId, 'workflow_id': workflowId };
        return this.collect<PieceJointe>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows/{workflow_id}/documents'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
    /**
     * Récupération de la liste des workflows d'un dossier.
     * @param dossierId Identifiant unique du Dossier
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateDossierWorkflows(dossierId: string, page?: number, perPage?: number): Collection<Workflow>
    {
        const pathVariable = { 'dossier_id': dossierId };
        return this.collect<Workflow>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
    /**
     * Récupération de la liste des dossiers selon des critères de recherche.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateDossiers(page?: number, perPage?: number): Collection<Dossier>
    {
        const pathVariable = {  };
        return this.collect<Dossier>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
    /**
     * TODO : Modification d'un dossier existant.
     * @param dossierId Identifiant unique du Dossier
     * @param dossier 
     */
    async patchDossier(dossierId: string, dossier?: Dossier): Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'dossier_id': dossierId };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}'),
            headers: {  },
            params: {  },
            body:  { 'id': dossier?.id, 'type': dossier?.type, 'description': dossier?.description, 'date_de_creation': dossier?.date_de_creation, 'createur': dossier?.createur, 'application_utilisee_nom': dossier?.application_utilisee_nom, 'statut': dossier?.statut, 'objet': dossier?.objet, 'pei': dossier?.pei, 'erp': dossier?.erp, 'workflow_actif': dossier?.workflow_actif } 
        });
    }
    
    /**
     * Création d'un nouveau dossier.
     * @param postDossierRequest 
     */
    async postDossier(postDossierRequest?: PostDossierRequest): Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers'),
            headers: {  },
            params: {  },
            body:  { 'titre': postDossierRequest?.titre, 'description': postDossierRequest?.description, 'type': postDossierRequest?.type } 
        });
    }
    
}
