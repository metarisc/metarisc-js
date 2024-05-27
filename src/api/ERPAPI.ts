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
     * @param erpId 
     */
    async getErp(erpId: string): Promise<AxiosResponse<ERP>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des contacts.
     * @param erpId 
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginateErpContacts(erpId: string, page?: number, perPage?: number): Collection<Contact>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect<Contact>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/contacts'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des documents.
     * @param erpId 
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginateErpDocuments(erpId: string, page?: number, perPage?: number): Collection<PieceJointe>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect<PieceJointe>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/documents'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des dossiers.
     * @param erpId 
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginateErpDossiers(erpId: string, page?: number, perPage?: number): Collection<Dossier>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect<Dossier>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/dossiers'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des ERP.
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginateErp(page?: number, perPage?: number): Collection<ERP>
    {
        const pathVariable = {  };
        return this.collect<ERP>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de l'historique d'un ERP.
     * @param erpId Identifiant unique de l'ERP
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginateErpHistorique(erpId: string, page?: number, perPage?: number): Collection<DescriptifTechniqueERP>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect<DescriptifTechniqueERP>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/historique'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Ajout d'un contact.
     * @param erpId 
     * @param contact 
     */
    async postContactsErp(erpId: string, contact?: Contact): Promise<AxiosResponse<Contact>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/contacts'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': contact?.id, 'nom': contact?.nom, 'prenom': contact?.prenom, 'fonction': contact?.fonction, 'telephone_fixe': contact?.telephone_fixe, 'telephone_portable': contact?.telephone_portable, 'telephone_fax': contact?.telephone_fax, 'adresse': contact?.adresse, 'site_web_url': contact?.site_web_url, 'civilite': contact?.civilite, 'societe': contact?.societe, 'email': contact?.email, 'observations': contact?.observations } )
        });
    }
    
    /**
     * Ajout d'un document.
     * @param erpId 
     * @param pieceJointe 
     */
    async postDocumentsErp(erpId: string, pieceJointe?: PieceJointe): Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/documents'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': pieceJointe?.id, 'url': pieceJointe?.url, 'nom': pieceJointe?.nom, 'description': pieceJointe?.description, 'type': pieceJointe?.type } )
        });
    }
    
    /**
     * Ajout d'un dossier.
     * @param erpId 
     * @param dossier 
     */
    async postDossiersErp(erpId: string, dossier?: Dossier): Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/dossiers'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': dossier?.id, 'type': dossier?.type, 'description': dossier?.description, 'date_de_creation': dossier?.date_de_creation ? Utils.formatDate(dossier?.date_de_creation) : undefined, 'createur': dossier?.createur, 'application_utilisee_nom': dossier?.application_utilisee_nom, 'statut': dossier?.statut, 'objet': dossier?.objet, 'pei_id': dossier?.pei_id, 'pei': dossier?.pei, 'erp_id': dossier?.erp_id, 'erp': dossier?.erp } )
        });
    }
    
    /**
     * Création d'un nouveau ERP.
     * @param ERP 
     */
    async postErp(ERP?: ERP): Promise<AxiosResponse<ERP>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': ERP?.id, 'date_de_realisation': ERP?.date_de_realisation ? Utils.formatDate(ERP?.date_de_realisation) : undefined, 'date_de_derniere_mise_a_jour': ERP?.date_de_derniere_mise_a_jour ? Utils.formatDate(ERP?.date_de_derniere_mise_a_jour) : undefined, 'references_exterieures': ERP?.references_exterieures, 'implantation': ERP?.implantation, 'descriptif_technique': ERP?.descriptif_technique, 'coordonnees': ERP?.coordonnees } )
        });
    }
    
}
