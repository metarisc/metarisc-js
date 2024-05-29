import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Contact } from '../model/Contact';
import { Dossier } from '../model/Dossier';
import { PieceJointe } from '../model/PieceJointe';
import { Workflow } from '../model/Workflow';
import { Tag } from '../model/Tag';

export class DossiersAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération de l'ensemble des données d'un dossier.
     * @param dossierId 
     */
    async getDossier(dossierId: string): Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération des détails d'un workflow.
     * @param dossierId Identifiant unique du Dossier
     * @param workflowId Identifiant unique du Workflow
     */
    async getDossierWorkflowsDetails(dossierId: string, workflowId: string): Promise<AxiosResponse<Workflow>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString(), 'workflow_id': (new String(workflowId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows/{workflow_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des contacts.
     * @param dossierId 
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginateDossierContacts(dossierId: string, page?: number, perPage?: number): Collection<Contact>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect<Contact>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/contacts'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des documents.
     * @param dossierId 
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginateDossierDocuments(dossierId: string, page?: number, perPage?: number): Collection<PieceJointe>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect<PieceJointe>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/documents'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des documents.
     * @param dossierId 
     * @param workflowId 
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginateDossierWorkflowsWorkflowDocuments(dossierId: string, workflowId: string, page?: number, perPage?: number): Collection<PieceJointe>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString(), 'workflow_id': (new String(workflowId)).toString() };
        return this.collect<PieceJointe>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows/{workflow_id}/documents'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des dossiers selon des critères de recherche.
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginateDossiers(page?: number, perPage?: number): Collection<Dossier>
    {
        const pathVariable = {  };
        return this.collect<Dossier>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des tags d'un dossier.
     * @param dossierId 
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginateDossierTags(dossierId: string, page?: number, perPage?: number): Collection<Tag>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect<Tag>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/tags'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des workflows d'un dossier.
     * @param dossierId Identifiant unique du Dossier
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginateDossierWorkflows(dossierId: string, page?: number, perPage?: number): Collection<Workflow>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect<Workflow>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Ajout d'un contact.
     * @param dossierId 
     * @param contact 
     */
    async postContactsDossier(dossierId: string, contact?: Contact): Promise<AxiosResponse<Contact>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/contacts'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': contact?.id, 'nom': contact?.nom, 'prenom': contact?.prenom, 'fonction': contact?.fonction, 'telephone_fixe': contact?.telephone_fixe, 'telephone_portable': contact?.telephone_portable, 'telephone_fax': contact?.telephone_fax, 'adresse': contact?.adresse, 'site_web_url': contact?.site_web_url, 'civilite': contact?.civilite, 'societe': contact?.societe, 'email': contact?.email, 'observations': contact?.observations } )
        });
    }
    
    /**
     * Ajout d'un document.
     * @param dossierId 
     * @param pieceJointe 
     */
    async postDocumentsDossier(dossierId: string, pieceJointe?: PieceJointe): Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/documents'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': pieceJointe?.id, 'url': pieceJointe?.url, 'nom': pieceJointe?.nom, 'description': pieceJointe?.description, 'type': pieceJointe?.type } )
        });
    }
    
    /**
     * Ajout d'un document.
     * @param dossierId 
     * @param workflowId 
     * @param pieceJointe 
     */
    async postDocumentsWorkflowWorkflowsDossier(dossierId: string, workflowId: string, pieceJointe?: PieceJointe): Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString(), 'workflow_id': (new String(workflowId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows/{workflow_id}/documents'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': pieceJointe?.id, 'url': pieceJointe?.url, 'nom': pieceJointe?.nom, 'description': pieceJointe?.description, 'type': pieceJointe?.type } )
        });
    }
    
    /**
     * Modification d'un dossier existant
     * @param dossierId 
     * @param dossier 
     */
    async patchDossier(dossierId: string, dossier?: Dossier): Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': dossier?.id, 'type': dossier?.type, 'description': dossier?.description, 'date_de_creation': dossier?.date_de_creation ? Utils.formatDate(dossier?.date_de_creation) : undefined, 'createur': dossier?.createur, 'application_utilisee_nom': dossier?.application_utilisee_nom, 'statut': dossier?.statut, 'objet': dossier?.objet, 'pei': dossier?.pei, 'erp': dossier?.erp } )
        });
    }
    
    /**
     * Terminer un workflow d'un dossier. Cela met à jour l'ensemble de son traitement.
     * @param dossierId 
     * @param workflowId 
     */
    async postTerminerWorkflowWorkflowsDossier(dossierId: string, workflowId: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString(), 'workflow_id': (new String(workflowId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows/{workflow_id}/terminer'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Mise à jour d'un workflow.
     * @param dossierId Identifiant unique du Dossier
     * @param workflowId Identifiant unique du Workflow
     * @param workflow 
     */
    async updateDossierWorkflowsDetails(dossierId: string, workflowId: string, workflow?: Workflow): Promise<AxiosResponse<Workflow>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString(), 'workflow_id': (new String(workflowId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows/{workflow_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter(workflow)
        });
    }
    
}
