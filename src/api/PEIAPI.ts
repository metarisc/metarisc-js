// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { AnomaliePEI } from '../model/AnomaliePEI';
import { Contact } from '../model/Contact';
import { Dossier } from '../model/Dossier';
import { PEI } from '../model/PEI';
import { PieceJointe } from '../model/PieceJointe';
import { ReferenceExterieure } from '../model/ReferenceExterieure';
import { DescriptifTechniqueDECI } from '../model/DescriptifTechniqueDECI';

export class PEIAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération de l'ensemble des données d'un PEI.
     */
    getPei(
        peiId: string
    ) : Promise<AxiosResponse<PEI>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de toutes les références extérieures de l'objet.
     */
    getReferencesExterieuresPei(
        peiId: string
    ) : Promise<AxiosResponse<{data: ReferenceExterieure[]}>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/references_exterieures'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des anomalies DECI détectées sur le PEI.
     */
    paginatePeiAnomalies(
        peiId: string
    ) : Collection<AnomaliePEI>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/anomalies'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des contacts.
     */
    paginatePeiContacts(
        peiId: string
    ) : Collection<Contact>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/contacts'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des documents.
     */
    paginatePeiDocuments(
        peiId: string
    ) : Collection<PieceJointe>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/documents'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des dossiers.
     */
    paginatePeiDossiers(
        peiId: string
    ) : Collection<Dossier>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/dossiers'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de l'historique d'un POI.
     */
    paginatePeiHistorique(
        peiId: string
    ) : Collection<DescriptifTechniqueDECI>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/historique'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des Points d'Eau Incendie (PEI) selon des critères de recherche.
     */
    paginatePei(
        sort? : 'numero' | '-numero',
        numero? : string,
        type? : 'PIBI' | 'PENA',
        statut? : 'reprise_de_donnees' | 'declaration_en_cours' | 'reconnaissance_operationnelle_initiale' | 'actif' | 'projet' | 'reforme' | 'declaration_abandonnee',
        estDisponible? : boolean,
        domanialite? : 'privee' | 'publique' | 'privee_conventionnee',
        geojson? : string,
        referencesExterieures? : string | Array<string>
    ) : Collection<PEI>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/pei'),
            params: Utils.payloadFilter({ 'sort': (new String(sort)).toString(), 'numero': (new String(numero)).toString(), 'type': (new String(type)).toString(), 'statut': (new String(statut)).toString(), 'est_disponible': (new String(estDisponible)).toString(), 'domanialite': (new String(domanialite)).toString(), 'geojson': (new String(geojson)).toString(), 'references_exterieures': (new String(referencesExterieures)).toString() }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Créez ou mettez à jour des références extérieures. L'utilisation d'une valeur null pour une référence extérieure supprimera ou « annulera » la valeur de la propriété de la référence extérieure.
     */
    patchReferencesExterieuresPei(
        peiId: string,
        params : any
    ) : Promise<AxiosResponse<{data: ReferenceExterieure[]}>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/references_exterieures'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'anomalies DECI détectées sur le PEI.
     */
    postAnomaliesPei(
        peiId: string,
        params : any
    ) : Promise<AxiosResponse<AnomaliePEI>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/anomalies'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un contact.
     */
    postContactsPei(
        peiId: string,
        params : any
    ) : Promise<AxiosResponse<Contact>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/contacts'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un document.
     */
    postDocumentsPei(
        peiId: string,
        params : any
    ) : Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/documents'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un dossier.
     */
    postDossiersPei(
        peiId: string,
        params : any
    ) : Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'pei_id': (new String(peiId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/pei/{pei_id}/dossiers'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un PEI.
     */
    postPei(
        params : any
    ) : Promise<AxiosResponse<PEI>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/pei'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter(params)
        });
    }
    
}
