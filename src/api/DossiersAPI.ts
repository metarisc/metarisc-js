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
import { Essai } from '../model/Essai';
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
    ) : void
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/archiver'),
            params: { },
            body: Utils.payloadFilter({})
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
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/affectations'),
            params: { },
            body: Utils.payloadFilter({})
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
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}'),
            params: { },
            body: Utils.payloadFilter({})
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
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/essais'),
            params: { },
            body: Utils.payloadFilter({})
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
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/rapport_etude/prescriptions'),
            params: { },
            body: Utils.payloadFilter({})
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
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/rapport_etude'),
            params: { },
            body: Utils.payloadFilter({})
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
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/contacts'),
            params: { },
            body: Utils.payloadFilter({})
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
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/documents'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des dossiers selon des critères de recherche.
     */
    paginateDossiers(
        objet? : string,
        erp? : string,
        pei? : string,
        type? : string,
        workflowActif? : 'analyse_de_risque' | 'validation' | 'arrivee_sis' | 'arrivee_sis_prev' | 'arrivee_secretariat_commission' | 'consultation_sis' | 'passage_commission' | 'relecture' | 'visite' | 'arrivee_secretariat' | 'workflow',
        affecte? : string,
        enveloppe? : string
    ) : Collection<Dossier>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers'),
            params: { 'objet': (new String(objet)).toString(), 'erp': (new String(erp)).toString(), 'pei': (new String(pei)).toString(), 'type': (new String(type)).toString(), 'workflow_actif': (new String(workflowActif)).toString(), 'affecte': (new String(affecte)).toString(), 'enveloppe': (new String(enveloppe)).toString() },
            body: Utils.payloadFilter({})
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
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/fil_rouge'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des tags d'un dossier.
     */
    paginateDossierTags(
        dossierId: string
    ) : Collection<Tag>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/tags'),
            params: { },
            body: Utils.payloadFilter({})
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
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows'),
            params: { },
            body: Utils.payloadFilter({})
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
            params: { },
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
            params: { },
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
            params: { },
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
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * L'export du dossier est une opération qui permet de récupérer un fichier PDF contenant l'ensemble des éléments du dossier. Le PDF généré est un document de synthèse qui reprend les informations du dossier, en se basant sur le modèle de rapport de l'organisation. L'export du dossier est une opération qui peut être longue, en fonction de la taille du dossier et du nombre d'éléments à exporter. Le fichier PDF généré est disponible en téléchargement depuis les pièces jointes du dossier.
     */
    postExportDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/export'),
            params: { },
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
            params: { },
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
            params: { },
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
            params: { },
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
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Archiver le dossier.
     */
    putArchiverDossier(
        dossierId: string
    ) : void
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        this.request({
            method: 'PUT',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/archiver'),
            params: { },
            body: Utils.payloadFilter({})
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
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
}
