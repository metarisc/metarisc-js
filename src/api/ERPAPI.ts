import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Contact } from '../model/Contact';
import { Dossier } from '../model/Dossier';
import { ERP } from '../model/ERP';
import { PieceJointe } from '../model/PieceJointe';
import { DescriptifTechniqueERP } from '../model/DescriptifTechniqueERP';

export class ERPAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération des détails de l'ERP.
     */
    async getErp(erpId: string): Promise<AxiosResponse<ERP>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des contacts.
     */
    paginateErpContacts(erpId: string, page?: number, perPage?: number): Collection<Contact>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect<Contact>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/contacts'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des documents.
     */
    paginateErpDocuments(erpId: string, page?: number, perPage?: number): Collection<PieceJointe>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect<PieceJointe>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/documents'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des dossiers.
     */
    paginateErpDossiers(erpId: string, page?: number, perPage?: number): Collection<Dossier>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect<Dossier>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/dossiers'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des ERP.
     */
    paginateErp(page?: number, perPage?: number): Collection<ERP>
    {
        const pathVariable = { };
        return this.collect<ERP>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de l'historique d'un ERP.
     */
    paginateErpHistorique(erpId: string, page?: number, perPage?: number): Collection<DescriptifTechniqueERP>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect<DescriptifTechniqueERP>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/historique'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Ajout d'un contact.
     */
    async postContactsErp(erpId: string, params : { nom? : string, prenom? : string, fonction? : string, telephoneFixe? : string, telephonePortable? : string, telephoneFax? : string, adresse? : string, siteWebUrl? : string, civilite? : string, societe? : string, email? : string, observations? : string }): Promise<AxiosResponse<Contact>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/contacts'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un document.
     */
    async postDocumentsErp(erpId: string, params : { url : string, nom? : string, description? : string, type? : string }): Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/documents'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un dossier.
     */
    async postDossiersErp(erpId: string, params : { type : string, objet? : string }): Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/dossiers'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Création d'un nouveau ERP.
     */
    async postErp(params : { implantation : { }, referencesExterieures? : { }, }): Promise<AxiosResponse<ERP>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
}
