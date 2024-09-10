import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Contact } from '../model/Contact';
import { Dossier } from '../model/Dossier';
import { PEI } from '../model/PEI';
import { PieceJointe } from '../model/PieceJointe';
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
     * Récupération de la liste des anomalies DECI détectées sur le PEI.
     */
    paginatePeiAnomalies(peiId: string, page?: number, perPage?: number): Collection<AnomaliePEI>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.collect<AnomaliePEI>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/anomalies'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
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
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
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
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
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
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
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
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des Points d'Eau Incendie (PEI) selon des critères de recherche.
     */
    paginatePei(page?: number, perPage?: number, geojson?: string): Collection<PEI>
    {
        const pathVariable = { };
        return this.collect<PEI>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString(), 'geojson': geojson },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Ajout d'un contact.
     */
    async postContactsPei(peiId: string, params : { nom ? : string, prenom ? : string, fonction ? : string, telephoneFixe ? : string, telephonePortable ? : string, telephoneFax ? : string, adresse ? : string, siteWebUrl ? : string, civilite ? : string, societe ? : string, email ? : string, observations ? : string }): Promise<AxiosResponse<Contact>>
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
    async postDocumentsPei(peiId: string, params : { url : string, estSensible : boolean, nom ? : string, description ? : string, type ? : string, }): Promise<AxiosResponse<PieceJointe>>
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
    async postDossiersPei(peiId: string, params : { type : string, objet ? : string }): Promise<AxiosResponse<Dossier>>
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
    async postPei(params : { descriptifTechnique : { type : string, domanialite? : string, observations_generales? : string, statut : string, surpression? : number, nature : string, debit_1bar? : number, pression? : number, pression_statique? : number, debit_gueule_bee? : number, volume? : number }, implantation : { code_postal? : string, commune? : string, voie? : string, code_insee? : string, arrondissement? : number, arrondissement_municipal? : string, latitude? : number, longitude? : number, localisation_operationnelle? : string, complement? : string }, referencesExterieures ? : { titre? : string, valeur? : string }[], numero ? : string, numeroCompteur ? : string, numeroSerieAppareil ? : string }): Promise<AxiosResponse<PEI>>
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
