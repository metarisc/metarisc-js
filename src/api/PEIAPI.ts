import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Contact } from '../model/Contact';
import { Dossier } from '../model/Dossier';
import { PEI } from '../model/PEI';
import { PieceJointe } from '../model/PieceJointe';
import { DescriptifTechniqueDECI } from '../model/DescriptifTechniqueDECI';

export class PEIAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération de l'ensemble des données d'un PEI.
     * @param peiId 
     */
    async getPei(peiId: string): Promise<AxiosResponse<PEI>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des contacts.
     * @param peiId 
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginatePeiContacts(peiId: string, page?: number, perPage?: number): Collection<Contact>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.collect<Contact>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/contacts'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des documents.
     * @param peiId 
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginatePeiDocuments(peiId: string, page?: number, perPage?: number): Collection<PieceJointe>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.collect<PieceJointe>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/documents'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des dossiers.
     * @param peiId 
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginatePeiDossiers(peiId: string, page?: number, perPage?: number): Collection<Dossier>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.collect<Dossier>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/dossiers'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de l'historique d'un POI.
     * @param peiId Identifiant unique du PEI
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginatePeiHistorique(peiId: string, page?: number, perPage?: number): Collection<DescriptifTechniqueDECI>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.collect<DescriptifTechniqueDECI>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/historique'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des Points d'Eau Incendie (PEI) selon des critères de recherche.
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     * @param geojson Filtre sur la position des PEI
     */
    paginatePei(page?: number, perPage?: number, geojson?: string): Collection<PEI>
    {
        const pathVariable = {  };
        return this.collect<PEI>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString(), 'geojson': geojson },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Ajout d'un contact.
     * @param peiId 
     * @param contact 
     */
    async postContactsPei(peiId: string, contact?: Contact): Promise<AxiosResponse<Contact>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/contacts'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': contact?.id, 'nom': contact?.nom, 'prenom': contact?.prenom, 'fonction': contact?.fonction, 'telephone_fixe': contact?.telephone_fixe, 'telephone_portable': contact?.telephone_portable, 'telephone_fax': contact?.telephone_fax, 'adresse': contact?.adresse, 'site_web_url': contact?.site_web_url, 'civilite': contact?.civilite, 'societe': contact?.societe, 'email': contact?.email, 'observations': contact?.observations } )
        });
    }
    
    /**
     * Ajout d'un document.
     * @param peiId 
     * @param pieceJointe 
     */
    async postDocumentsPei(peiId: string, pieceJointe?: PieceJointe): Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/documents'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': pieceJointe?.id, 'url': pieceJointe?.url, 'nom': pieceJointe?.nom, 'description': pieceJointe?.description, 'type': pieceJointe?.type } )
        });
    }
    
    /**
     * Ajout d'un dossier.
     * @param peiId 
     * @param dossier 
     */
    async postDossiersPei(peiId: string, dossier?: Dossier): Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/dossiers'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': dossier?.id, 'type': dossier?.type, 'description': dossier?.description, 'date_de_creation': dossier?.date_de_creation ? Utils.formatDate(dossier?.date_de_creation) : undefined, 'createur': dossier?.createur, 'application_utilisee_nom': dossier?.application_utilisee_nom, 'statut': dossier?.statut, 'objet': dossier?.objet, 'pei': dossier?.pei, 'erp': dossier?.erp } )
        });
    }
    
    /**
     * Ajout d'un PEI.
     * @param PEI 
     */
    async postPei(PEI?: PEI): Promise<AxiosResponse<PEI>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/pei'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': PEI?.id, 'date_de_realisation': PEI?.date_de_realisation ? Utils.formatDate(PEI?.date_de_realisation) : undefined, 'date_de_derniere_mise_a_jour': PEI?.date_de_derniere_mise_a_jour ? Utils.formatDate(PEI?.date_de_derniere_mise_a_jour) : undefined, 'references_exterieures': PEI?.references_exterieures, 'descriptif_technique': PEI?.descriptif_technique, 'implantation': PEI?.implantation, 'genre': PEI?.genre, 'numero': PEI?.numero, 'numero_compteur': PEI?.numero_compteur, 'numero_serie_appareil': PEI?.numero_serie_appareil } )
        });
    }
    
}
