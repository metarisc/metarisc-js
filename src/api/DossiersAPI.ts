// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Contact } from '../model/Contact';
import { Dossier } from '../model/Dossier';
import { DossierAffectation } from '../model/DossierAffectation';
import { FilRougeMessage } from '../model/FilRougeMessage';
import { PieceJointe } from '../model/PieceJointe';
import { PrescriptionAnalyseDeRisque } from '../model/PrescriptionAnalyseDeRisque';
import { RapportEtude } from '../model/RapportEtude';
import { RapportVisite } from '../model/RapportVisite';
import { Essai } from '../model/Essai';
import { PermissionDossier } from '../model/PermissionDossier';
import { Tag } from '../model/Tag';
import { Workflow } from '../model/Workflow';

export class DossiersAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Désarchiver le dossier.
     */
    deleteArchiverDossier(
        dossierId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/archiver')
        });
    }
    
    /**
     * Liste des affectations du dossier.
     */
    getAffectationsDossier(
        dossierId: string
    ) : Promise<AxiosResponse<{data: DossierAffectation[]}>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/affectations')
        });
    }
    
    /**
     * Récupération de l'ensemble des données d'un dossier.
     */
    getDossier(
        dossierId: string
    ) : Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}')
        });
    }
    
    /**
     * Récupération des essais réalisés d'un dossier de visite.
     */
    getEssaisDossier(
        dossierId: string
    ) : Promise<AxiosResponse<{data: Essai[]}>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/essais')
        });
    }
    
    /**
     * L'export du rapport d'étude est une opération qui permet de récupérer un fichier PDF contenant l'ensemble des éléments du dossier d'étude. Le SIS réalise pour chaque étude ou visite un rapport détaillé par ERP. Ce document est présenté en commission par le sapeur pompier préventionniste en sa qualité de rapporteur et de technicien du risque. Le PDF généré est un document de synthèse qui reprend les informations du dossier, en se basant sur le modèle de rapport de l'organisation. L'export du dossier est une opération qui peut être longue, en fonction de la taille du dossier et du nombre d'éléments à exporter.
     */
    getPdfRapportEtudeDossier(
        dossierId: string
    ) : Promise<AxiosResponse<Blob>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            responseType: 'blob',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/rapport_etude/pdf')
        });
    }
    
    /**
     * Ensemble des permissions de l'utilisateur connecté sur le dossier.
     */
    getPermissionsDossier(
        dossierId: string
    ) : Promise<AxiosResponse<{data: PermissionDossier[]}>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/permissions')
        });
    }
    
    /**
     * Récupération de la liste des prescriptions sur le rapport d'étude.
     */
    getPrescriptionsRapportEtudeDossier(
        dossierId: string
    ) : Promise<AxiosResponse<{data: PrescriptionAnalyseDeRisque[]}>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/rapport_etude/prescriptions')
        });
    }
    
    /**
     * Récupération des détails du rapport d'étude.
     */
    getRapportEtudeDossier(
        dossierId: string
    ) : Promise<AxiosResponse<RapportEtude>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/rapport_etude')
        });
    }
    
    /**
     * Récupération des détails du rapport de visite.
     */
    getRapportVisiteDossier(
        dossierId: string
    ) : Promise<AxiosResponse<RapportVisite>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/rapport_visite')
        });
    }
    
    /**
     * Récupération de la liste des tags d'un dossier.
     */
    paginateDossierTags(
        dossierId: string
    ) : Promise<AxiosResponse<{data: Tag[]}>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/tags')
        });
    }
    
    /**
     * Récupération de la liste des contacts.
     */
    paginateDossierContacts(
        dossierId: string
    ) : Collection<Contact>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/contacts')
        });
    }
    
    /**
     * Récupération de la liste des documents.
     */
    paginateDossierDocuments(
        dossierId: string
    ) : Collection<PieceJointe>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/documents')
        });
    }
    
    /**
     * Récupération de la liste des dossiers selon des critères de recherche.
     */
    paginateDossiers(
        sort? : 'date_de_creation' | '-date_de_creation',
        objet? : string,
        erp? : string,
        pei? : string,
        type? : string | Array<string>,
        workflowActif? : 'analyse_de_risque' | 'validation' | 'arrivee_sis' | 'arrivee_sis_prev' | 'arrivee_secretariat_commission' | 'consultation_sis' | 'passage_commission' | 'relecture' | 'visite' | 'arrivee_secretariat' | 'workflow' | 'reception_de_travaux_en_attente',
        affecte? : string,
        enveloppe? : string,
        numeroUrba? : string
    ) : Collection<Dossier>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers'),
            params: Utils.payloadFilter({
                'sort': sort === undefined ? undefined : (new String(sort)).toString(), 
                'objet': objet === undefined ? undefined : (new String(objet)).toString(), 
                'erp': erp === undefined ? undefined : (new String(erp)).toString(), 
                'pei': pei === undefined ? undefined : (new String(pei)).toString(), 
                'type': type === undefined ? undefined : (new String(type)).toString(), 
                'workflow_actif': workflowActif === undefined ? undefined : (new String(workflowActif)).toString(), 
                'affecte': affecte === undefined ? undefined : (new String(affecte)).toString(), 
                'enveloppe': enveloppe === undefined ? undefined : (new String(enveloppe)).toString(), 
                'numero_urba': numeroUrba === undefined ? undefined : (new String(numeroUrba)).toString()
            })
        });
    }
    
    /**
     * Consulter l'espace d'échange pour le suivi du dossier.
     */
    paginateDossierFilRouge(
        dossierId: string
    ) : Collection<FilRougeMessage>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/fil_rouge')
        });
    }
    
    /**
     * Récupération de la liste des workflows d'un dossier.
     */
    paginateDossierWorkflows(
        dossierId: string
    ) : Collection<Workflow>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows')
        });
    }
    
    /**
     * Ajoute une affectation à un dossier. Vous pouvez affecter plusieurs personnes au dossier, y compris vous-même. Cela permet de débloquer des droits spécifiques sur le traitement du dossier.
     */
    postAffectationsDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<DossierAffectation>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/affectations'),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un contact.
     */
    postContactsDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<Contact>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/contacts'),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un document.
     */
    postDocumentsDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/documents'),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Modification d'un dossier existant en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    patchDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}'),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajoute un message dans le fil rouge d'un dossier pour l'utilisateur connecté.
     */
    postFilRougeDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<FilRougeMessage>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/fil_rouge'),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'une prescription sur le rapport d'étude.
     */
    postPrescriptionsRapportEtudeDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<PrescriptionAnalyseDeRisque>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/rapport_etude/prescriptions'),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Mise à jour du rapport d'étude en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    postRapportEtudeDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<RapportEtude>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/rapport_etude'),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Mise à jour du rapport de visite en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    postRapportVisiteDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<RapportVisite>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/rapport_visite'),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Réorganiser les numéros d'ordre des prescriptions du rapport d'étude. Cela permet de mettre à jour simplement les numéros d'ordre des prescriptions du rapport d'étude.
     */
    postReorganiserPrescriptionsRapportEtudeDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<{data: PrescriptionAnalyseDeRisque[]}>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/rapport_etude/prescriptions/reorganiser'),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Permet de remplacer les tags d'un dossier existant par les valeurs transmis. Si un tableau vide est envoyé, les tags seront réinitialisés.
     */
    postTagsDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<{data: Tag[]}>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/tags'),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Archiver le dossier.
     */
    putArchiverDossier(
        dossierId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'PUT',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/archiver')
        });
    }
    
    /**
     * Mise à jour des essais réalisés en définissant les valeurs des paramètres transmis.
     */
    putEssaisDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<{data: Essai[]}>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'PUT',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/essais'),
            body: Utils.payloadFilter(params)
        });
    }
    
}
