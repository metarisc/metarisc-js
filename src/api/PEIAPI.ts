import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Contact } from '../model/Contact';
import { Dossier } from '../model/Dossier';
import { PEI } from '../model/PEI';
import { PieceJointe } from '../model/PieceJointe';
import { ReferenceExterieure } from '../model/ReferenceExterieure';
import { AnomaliePEI } from '../model/AnomaliePEI';
import { DescriptifTechniqueDECI } from '../model/DescriptifTechniqueDECI';

export class PEIAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération de l'ensemble des données d'un PEI.
     */
    async getPei(peiId: string): Promise<AxiosResponse<PEI>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de toutes les références extérieures de l'objet.
     */
    getReferencesExterieuresPei(peiId: string): Promise<AxiosResponse<{data: ReferenceExterieure[]}>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/references_exterieures'),
            params: { }
        });
    }
    
    /**
     * Récupération de la liste des anomalies DECI détectées sur le PEI.
     */
    paginatePeiAnomalies(peiId: string, page?: number, perPage?: number): Collection<AnomaliePEI>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.collect<AnomaliePEI>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/anomalies'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() }
        });
    }
    
    /**
     * Récupération de la liste des contacts.
     */
    paginatePeiContacts(peiId: string, page?: number, perPage?: number): Collection<Contact>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.collect<Contact>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/contacts'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() }
        });
    }
    
    /**
     * Récupération de la liste des documents.
     */
    paginatePeiDocuments(peiId: string, page?: number, perPage?: number): Collection<PieceJointe>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.collect<PieceJointe>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/documents'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() }
        });
    }
    
    /**
     * Récupération de la liste des dossiers.
     */
    paginatePeiDossiers(peiId: string, page?: number, perPage?: number): Collection<Dossier>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.collect<Dossier>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/dossiers'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() }
        });
    }
    
    /**
     * Récupération de l'historique d'un POI.
     */
    paginatePeiHistorique(peiId: string, page?: number, perPage?: number): Collection<DescriptifTechniqueDECI>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.collect<DescriptifTechniqueDECI>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/historique'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() }
        });
    }
    
    /**
     * Récupération de la liste des Points d'Eau Incendie (PEI) selon des critères de recherche.
     */
    paginatePei(page?: number, perPage?: number, sort?: string, numero?: string, type?: string, statut?: string, estDisponible?: boolean, domanialite?: string, geojson?: string): Collection<PEI>
    {
        const pathVariable = { };
        return this.collect<PEI>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString(), 'sort': sort, 'numero': numero, 'type': type, 'statut': statut, 'est_disponible': estDisponible?.toString(), 'domanialite': domanialite, 'geojson': geojson }
        });
    }
    
    /**
     * Créez ou mettez à jour des références extérieures. L'utilisation d'une valeur null pour une référence extérieure supprimera ou « annulera » la valeur de la propriété de la référence extérieure.
     */
    async patchReferencesExterieuresPei(peiId: string, params : { titre ? : string, valeur ? : string }): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/references_exterieures'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un contact.
     */
    async postContactsPei(peiId: string, params : { nom ? : string, prenom ? : string, fonction ? : string, telephone_fixe ? : string, telephone_portable ? : string, telephone_fax ? : string, adresse ? : string, site_web_url ? : string, civilite ? : string, societe ? : string, email ? : string, observations ? : string }): Promise<AxiosResponse<Contact>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/contacts'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un document.
     */
    async postDocumentsPei(peiId: string, params : { url : string, est_sensible : boolean, nom ? : string, description ? : string, type ? : string, }): Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/documents'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un dossier.
     */
    async postDossiersPei(peiId: string, params : { type : string, objet ? : string, }): Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/dossiers'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un PEI.
     */
    async postPei(params : { descriptif_technique : { type : string, domanialite? : string, observations_generales? : string, statut : string, surpression? : number, nature : string, debit_1bar? : number, pression? : number, pression_statique? : number, debit_gueule_bee? : number, volume? : number }, implantation : { code_postal? : string, commune? : string, voie? : string, code_insee? : string, arrondissement? : number, arrondissement_municipal? : string, latitude? : number, longitude? : number, localisation_operationnelle? : string, complement? : string }, numero ? : string, numero_compteur ? : string, numero_serie_appareil ? : string }): Promise<AxiosResponse<PEI>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/pei'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
}
