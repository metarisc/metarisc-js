import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Contact } from '../model/Contact';
import { Dossier } from '../model/Dossier';
import { PieceJointe } from '../model/PieceJointe';
import { Tag } from '../model/Tag';
import { Workflow } from '../model/Workflow';

export class DossiersAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération de l'ensemble des données d'un dossier.
     */
    async getDossier(dossierId: string): Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des contacts.
     */
    paginateDossierContacts(dossierId: string, page?: number, perPage?: number): Collection<Contact>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect<Contact>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/contacts'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() }
        });
    }
    
    /**
     * Récupération de la liste des documents.
     */
    paginateDossierDocuments(dossierId: string, page?: number, perPage?: number): Collection<PieceJointe>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect<PieceJointe>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/documents'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() }
        });
    }
    
    /**
     * Récupération de la liste des dossiers selon des critères de recherche.
     */
    paginateDossiers(page?: number, perPage?: number): Collection<Dossier>
    {
        const pathVariable = { };
        return this.collect<Dossier>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() }
        });
    }
    
    /**
     * Récupération de la liste des tags d'un dossier.
     */
    paginateDossierTags(dossierId: string, page?: number, perPage?: number): Collection<Tag>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect<Tag>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/tags'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() }
        });
    }
    
    /**
     * Récupération de la liste des workflows d'un dossier.
     */
    paginateDossierWorkflows(dossierId: string, page?: number, perPage?: number): Collection<Workflow>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect<Workflow>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() }
        });
    }
    
    /**
     * Ajout d'un contact.
     */
    async postContactsDossier(dossierId: string, params : { nom ? : string, prenom ? : string, fonction ? : string, telephone_fixe ? : string, telephone_portable ? : string, telephone_fax ? : string, adresse ? : string, site_web_url ? : string, civilite ? : string, societe ? : string, email ? : string, observations ? : string }): Promise<AxiosResponse<Contact>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/contacts'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un document.
     */
    async postDocumentsDossier(dossierId: string, params : { url : string, est_sensible : boolean, nom ? : string, description ? : string, type ? : string, }): Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/documents'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Modification d'un dossier existant
     */
    async patchDossier(dossierId: string, params : { objet ? : string }): Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
}
