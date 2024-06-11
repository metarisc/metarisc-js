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
     */
    async getDossier(dossierId: string ): Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}'),
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération des détails d'un workflow.
     */
    async getDossierWorkflowsDetails(dossierId: string, workflowId: string ): Promise<AxiosResponse<Workflow>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString(), 'workflow_id': (new String(workflowId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows/{workflow_id}'),
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des contacts.
     */
    paginateDossierContacts(dossierId: string, page?: number, perPage?: number ): Collection<Contact>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect<Contact>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/contacts'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des documents.
     */
    paginateDossierDocuments(dossierId: string, page?: number, perPage?: number ): Collection<PieceJointe>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect<PieceJointe>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/documents'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des documents.
     */
    paginateDossierWorkflowsWorkflowDocuments(dossierId: string, workflowId: string, page?: number, perPage?: number ): Collection<PieceJointe>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString(), 'workflow_id': (new String(workflowId)).toString() };
        return this.collect<PieceJointe>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows/{workflow_id}/documents'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des dossiers selon des critères de recherche.
     */
    paginateDossiers(page?: number, perPage?: number ): Collection<Dossier>
    {
        const pathVariable = {  };
        return this.collect<Dossier>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des tags d'un dossier.
     */
    paginateDossierTags(dossierId: string, page?: number, perPage?: number ): Collection<Tag>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect<Tag>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/tags'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des workflows d'un dossier.
     */
    paginateDossierWorkflows(dossierId: string, page?: number, perPage?: number ): Collection<Workflow>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect<Workflow>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Ajout d'un contact.
     */
    async postContactsDossier(dossierId: string, contact?: Contact): Promise<AxiosResponse<Contact>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/contacts'),
            params: {  },
            body: Utils.payloadFilter( { 'id': contact?.id, 'nom': contact?.nom, 'prenom': contact?.prenom, 'fonction': contact?.fonction, 'telephone_fixe': contact?.telephone_fixe, 'telephone_portable': contact?.telephone_portable, 'telephone_fax': contact?.telephone_fax, 'adresse': contact?.adresse, 'site_web_url': contact?.site_web_url, 'civilite': contact?.civilite, 'societe': contact?.societe, 'email': contact?.email, 'observations': contact?.observations } )
        });
    }
    
    /**
     * Ajout d'un document.
     */
    async postDocumentsDossier(dossierId: string, pieceJointe?: PieceJointe): Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/documents'),
            params: {  },
            body: Utils.payloadFilter( { 'id': pieceJointe?.id, 'url': pieceJointe?.url, 'nom': pieceJointe?.nom, 'description': pieceJointe?.description, 'type': pieceJointe?.type } )
        });
    }
    
    /**
     * Ajout d'un document.
     */
    async postDocumentsWorkflowWorkflowsDossier(dossierId: string, workflowId: string, pieceJointe?: PieceJointe): Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString(), 'workflow_id': (new String(workflowId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows/{workflow_id}/documents'),
            params: {  },
            body: Utils.payloadFilter( { 'id': pieceJointe?.id, 'url': pieceJointe?.url, 'nom': pieceJointe?.nom, 'description': pieceJointe?.description, 'type': pieceJointe?.type } )
        });
    }
    
    /**
     * Modification d'un dossier existant
     */
    async patchDossier(dossierId: string, dossier?: Dossier): Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}'),
            params: {  },
            body: Utils.payloadFilter( { 'id': dossier?.id, 'type': dossier?.type, 'description': dossier?.description, 'date_de_creation': dossier?.date_de_creation ? Utils.formatDate(dossier?.date_de_creation) : undefined, 'createur': dossier?.createur, 'application_utilisee_nom': dossier?.application_utilisee_nom, 'statut': dossier?.statut, 'objet': dossier?.objet, 'pei': dossier?.pei, 'erp': dossier?.erp } )
        });
    }
    
    /**
     * Terminer un workflow d'un dossier. Cela met à jour l'ensemble de son traitement.
     */
    async postTerminerWorkflowWorkflowsDossier(dossierId: string, workflowId: string ): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString(), 'workflow_id': (new String(workflowId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows/{workflow_id}/terminer'),
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Mise à jour d'un workflow.
     */
    async updateDossierWorkflowsDetails(dossierId: string, workflowId: string, workflow?: Workflow): Promise<AxiosResponse<Workflow>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString(), 'workflow_id': (new String(workflowId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows/{workflow_id}'),
            params: {  },
            body: Utils.payloadFilter(workflow)
        });
    }
    
}
