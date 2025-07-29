// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Contact } from '../model/Contact';
import { Dossier } from '../model/Dossier';
import { ERP } from '../model/ERP';
import { MainCourante } from '../model/MainCourante';
import { PieceJointe } from '../model/PieceJointe';
import { PermissionErp } from '../model/PermissionErp';
import { ReferenceExterieure } from '../model/ReferenceExterieure';
import { DescriptifTechniqueERP } from '../model/DescriptifTechniqueERP';
import { Prescription } from '../model/Prescription';
import { PrescriptionSupportReglementaire } from '../model/PrescriptionSupportReglementaire';

export class ERPAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération des détails de l'ERP.
     */
    getErp(
        erpId: string
    ) : Promise<AxiosResponse<ERP>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}')
        });
    }
    
    /**
     * Ensemble des permissions de l'utilisateur connecté sur l'ERP.
     */
    getPermissionsErp(
        erpId: string
    ) : Promise<AxiosResponse<{data: PermissionErp[]}>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/permissions')
        });
    }
    
    /**
     * Récupération de toutes les références extérieures de l'objet.
     */
    getReferencesExterieuresErp(
        erpId: string
    ) : Promise<AxiosResponse<{data: ReferenceExterieure[]}>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/references_exterieures')
        });
    }
    
    /**
     * Récupération de la liste des contacts.
     */
    paginateErpContacts(
        erpId: string
    ) : Collection<Contact>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/contacts')
        });
    }
    
    /**
     * Récupération de la liste des documents.
     */
    paginateErpDocuments(
        erpId: string
    ) : Collection<PieceJointe>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/documents')
        });
    }
    
    /**
     * Récupération de la liste des dossiers.
     */
    paginateErpDossiers(
        erpId: string,
        type? : 'erp:autorisation_de_travaux' | 'erp:permis_de_construire' | 'erp:levee_de_prescriptions' | 'erp:changement_de_dus' | 'erp:salon_type_t' | 'erp:utilisation_exceptionnelle_de_locaux' | 'erp:demande_d_implantation_cts_inferieur_6_mois' | 'erp:demande_d_implantation_cts_superieur_6_mois' | 'erp:derogation' | 'erp:etude_cahier_des_charges_type_t' | 'erp:levee_de_reserve' | 'erp:echeancier_de_travaux' | 'erp:cahier_des_charges_ssi' | 'erp:etude_suite_a_un_avis_differe' | 'erp:visite_periodique' | 'erp:visite_reception' | 'erp:visite_avant_ouverture' | 'erp:visite_controle' | 'erp:visite_inopinee' | 'erp:visite_chantier' | 'erp:demande_avis' | 'erp:demande_reclassement' | 'erp:suivi_avis_defavorable' | 'erp:levee_avis_defavorable' | 'erp:dossier_ge_2' | 'erp:schema_general_organisation_securite' | 'erp:etude_ingenierie' | 'erp:manifestation_temporaire',
        sort? : 'asc' | 'desc'
    ) : Collection<Dossier>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/dossiers'),
            params: Utils.payloadFilter({
                'type': type === undefined ? undefined : (new String(type)).toString(), 
                'sort': sort === undefined ? undefined : (new String(sort)).toString()
            })
        });
    }
    
    /**
     * Récupération de la liste des Établissements Recevant du Public (ERP) selon des critères de recherche.
     */
    paginateErp(
        sort? : 'libelle' | '-libelle',
        libelle? : string,
        geojson? : string,
        referencesExterieures? : string | Array<string>,
        presenceLocauxSommeil? : boolean,
        typeActivite? : string | Array<string>,
        avisExploitation? : 'favorable' | 'defavorable',
        aVisiterEn? : string,
        siteGeographique? : string,
        commissionConcernee? : string,
        categorie? : 1 | 2 | 3 | 4 | 5,
        erpRattacheA? : string
    ) : Collection<ERP>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp'),
            params: Utils.payloadFilter({
                'sort': sort === undefined ? undefined : (new String(sort)).toString(), 
                'libelle': libelle === undefined ? undefined : (new String(libelle)).toString(), 
                'geojson': geojson === undefined ? undefined : (new String(geojson)).toString(), 
                'references_exterieures': referencesExterieures === undefined ? undefined : (new String(referencesExterieures)).toString(), 
                'presence_locaux_sommeil': presenceLocauxSommeil === undefined ? undefined : (new String(presenceLocauxSommeil)).toString(), 
                'type_activite': typeActivite === undefined ? undefined : (new String(typeActivite)).toString(), 
                'avis_exploitation': avisExploitation === undefined ? undefined : (new String(avisExploitation)).toString(), 
                'a_visiter_en': aVisiterEn === undefined ? undefined : (new String(aVisiterEn)).toString(), 
                'site_geographique': siteGeographique === undefined ? undefined : (new String(siteGeographique)).toString(), 
                'commission_concernee': commissionConcernee === undefined ? undefined : (new String(commissionConcernee)).toString(), 
                'categorie': categorie === undefined ? undefined : (new String(categorie)).toString(), 
                'erp_rattache_a': erpRattacheA === undefined ? undefined : (new String(erpRattacheA)).toString()
            })
        });
    }
    
    /**
     * Récupération de l'historique d'un ERP.
     */
    paginateErpHistorique(
        erpId: string
    ) : Collection<DescriptifTechniqueERP>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/historique')
        });
    }
    
    /**
     * Récupération de la liste des mains courantes.
     */
    paginateErpMainsCourantes(
        erpId: string,
        sort? : 'date' | '-date'
    ) : Collection<MainCourante>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/mains_courantes'),
            params: Utils.payloadFilter({
                'sort': sort === undefined ? undefined : (new String(sort)).toString()
            })
        });
    }
    
    /**
     * Retourne la liste des prescriptions soulevées dans les visites et les études de l'ERP.
     */
    paginateErpPrescriptions(
        erpId: string
    ) : Collection<Prescription>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/prescriptions')
        });
    }
    
    /**
     * Retourne la liste des textes applicables d'un ERP en fonction de son type d'activité.
     */
    paginateTextesApplicables(
        erpId: string
    ) : Collection<PrescriptionSupportReglementaire>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/textes_applicables')
        });
    }
    
    /**
     * Créez ou mettez à jour des références extérieures. L'utilisation d'une valeur null pour une référence extérieure supprimera ou « annulera » la valeur de la propriété de la référence extérieure.
     */
    patchReferencesExterieuresErp(
        erpId: string,
        params : any
    ) : Promise<AxiosResponse<{data: ReferenceExterieure[]}>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/references_exterieures'),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un contact.
     */
    postContactsErp(
        erpId: string,
        params : any
    ) : Promise<AxiosResponse<Contact>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/contacts'),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un document.
     */
    postDocumentsErp(
        erpId: string,
        params : any
    ) : Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/documents'),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un dossier.
     */
    postDossiersErp(
        erpId: string,
        params : any
    ) : Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/dossiers'),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Création d'un nouveau ERP.
     */
    post(
        params : any
    ) : Promise<AxiosResponse<ERP>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp'),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Mise à jour des détails d'un ERP en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    postErp(
        erpId: string,
        params : any
    ) : Promise<AxiosResponse<ERP>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}'),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'une main courante.
     */
    postMainsCourantesErp(
        erpId: string,
        params : any
    ) : Promise<AxiosResponse<MainCourante>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/mains_courantes'),
            body: Utils.payloadFilter(params)
        });
    }
    
}
