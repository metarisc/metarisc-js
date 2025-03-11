// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Contact } from '../model/Contact';
import { Dossier } from '../model/Dossier';
import { ERP } from '../model/ERP';
import { PieceJointe } from '../model/PieceJointe';
import { ReferenceExterieure } from '../model/ReferenceExterieure';
import { DescriptifTechniqueERP } from '../model/DescriptifTechniqueERP';
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
        erpId: string
    ) : Collection<Dossier>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/dossiers')
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
        typeActivite? : 'CTS - Châpiteaux' | 'CTS - Structures' | 'CTS - Tentes' | 'EF - Bateaux en stationnement sur les eaux intérieures' | 'EF - Bateaux stationnaires' | 'EF - Etablissements flottants' | 'GA - Gares' | 'GEEM - Grands établissements à exploitation multiple' | 'J - Etablissements d\'enseignement avec internat pour jeunes handicapés ou inadaptés' | 'J - Etablissements d\'hébergement pour adultes handicapés' | 'J - Etablissements médico-éducatifs avec internat pour jeunes handicapés ou inadaptés' | 'J - Structures d\'accueil pour personnes âgées' | 'J - Structures d\'accueil pour personnes handicapées' | 'L - Cabarets' | 'L - Salles d\'audition' | 'L - Salle de conférences' | 'L - Salles de pari' | 'L - Salles de projection' | 'L - Salles de quartier (ou assimilée)' | 'L - Salles de réunions' | 'L - Salles de spectacles' | 'L - Salles multimédia' | 'L - Salles polyvalentes à dominante sportive, dont la superficie unitaire est supérieure ou égale à 1 200 m2' | 'L - Salles polyvalentes non visée par le Type X (salle polyvalente qui n\'a pas une destination unique)' | 'L - Salles réservées aux associations' | 'M - Aires de vente' | 'M - Centres commerciaux' | 'M - Locaux de vente' | 'M - Magasin de vente' | 'N - Bars' | 'N - Brasseries' | 'N - Cafétaria' | 'N - Cafés' | 'N - Cantines' | 'N - Débits de boissons' | 'N - Restaurants' | 'O - Hôtels' | 'O - Pensions de famille' | 'OA - Hôtels-restaurants d\'altitude' | 'P - Salle de bals' | 'P - Dancing / discothèque' | 'P - Salles de jeux' | 'PA - Arènes' | 'PA - Hippodromes' | 'PA - Piscines' | 'PA - Pistes de patinage' | 'PA - Stades' | 'PA - Terrains de sport' | 'PA - Parc d\'attraction' | 'PE 2 §2 - Locaux à usage collectif d\'une surface unitaire supérieure à 50 mètres carrés des logements-foyers et de l\'habitat de loisirs à gestion collective' | 'PE 2 §2 - Bâtiments ou locaux à usage d\'hébergement qui ne relèvent d\'aucun type défini à l\'article GN 1 et qui permettent d\'accueillir plus de 15 et moins de 100 personnes n\'y élisant pas domicile' | 'PE 2 §2 - Hébergement de mineurs en dehors de leurs familles, le seuil de l\'effectif est fixé à 7 mineurs' | 'PE 2 §2 - Maisons d\'assistants maternels (MAM) dont les locaux accessibles au public sont strictement limités à un seul étage sur rez-de-chaussée et dont l\'effectif ne dépasse pas 16 enfants' | 'PS - Parcs de stationnement couverts' | 'PS - Parc de stationnement mixte' | 'PS - Parc de stationnement largement ventilé' | 'PS - Parc de stationnement à rangement automatisé' | 'R - Auberges de jeunesse (comprenant au moins un local collectif à sommeil)' | 'R - Auto-écoles' | 'R - Centres aérés' | 'R - Centres de loisirs (sans hébergement)' | 'R - Centres de vacances' | 'R - Colonies de vacances' | 'R - Crèches' | 'R - Ecoles maternelles' | 'R - Etablissements d\'enseignement' | 'R - Etablissements de formation' | 'R - Haltes-garderies' | 'R - Internats des établissements de l\'enseignement primaire et secondaire' | 'R - Jardins d\'enfant' | 'R - Lycee public' | 'R - Collège public' | 'R - Lycee privé' | 'R - Collège privé' | 'R - École élémentaire' | 'REF - Refuges de montagne' | 'S - Bibliothèques' | 'S - Centres de documentation et de consultation d\'archives' | 'SG - Structures gonflables' | 'T - Etablissements à vocation commerciale destinés à des expositions' | 'T - Foires-expositions' | 'T - Salles d\'expositions à caractère permanent n\'ayant pas une vocation de foire ou de salon' | 'T - Salles d\'expositions à caractère permanent de véhicules automobiles, bateaux, machines et autres volumineux biens d\'équipements assimilables' | 'T - Salons à caractère temporaire' | 'U - Etablissements de cure thermale ou de thalassothérapie' | 'U - Etablissements de santé publics ou privés dispensant des soins de courte durée en médecine, chirurgie, obstétrique' | 'U - Etablissements de santé publics ou privés dispensant des soins de psychiatrie, de suite ou de réadaptation, des soins de longue durée, à des personnes n\'ayant pas leur autonomie de vie dont l\'état nécessite une surveillance médicale constante' | 'U - Pouponnières (enfants de moins de 3 ans)' | 'V - Eglises' | 'V - Mosquées' | 'V - Synagogues' | 'V - Temples' | 'W - Administrations' | 'W - Banques' | 'W - Bureaux' | 'X - Manèges' | 'X - Patinoires' | 'X - Piscines couvertes, transformables et mixtes' | 'X - Salles d\'éducation physique et sportive' | 'X - Salles omnisports' | 'X - Salles polyvalentes à dominante sportive, dont l\'aire d\'activité est inférieure à 1200 m² et la hauteur sous plafond supérieure ou égale à 6,50 mètres' | 'X - Salles sportives spécialisées' | 'Y - Musées' | 'Y - Salles destinées à recevoir des expositions à vocation culturelle, scientifique, technique, artistique, etc. ayant un caractère temporaire',
        avisExploitation? : 'favorable' | 'defavorable',
        aVisiterEn? : string,
        siteGeographique? : string
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
                'site_geographique': siteGeographique === undefined ? undefined : (new String(siteGeographique)).toString()
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
    
}
