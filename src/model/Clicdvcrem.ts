// File generated from our OpenAPI spec
import { Degagement } from './Degagement';
import { EffectifsNiveau } from './EffectifsNiveau';
import { Local } from './Local';

export type Clicdvcrem = {
    'activite_principale': ActivitePrincipaleEnum | null;
    'activites_secondaire': Array<ActivitesSecondaireEnum> | null;
    'categorie': CategorieEnum | null;
    'groupement_etablissement': GroupementEtablissementEnum | null;
    'tableau_des_effectifs': Array<EffectifsNiveau> | null;
    'effectif_public': number | null;
    'effectif_public_total': number | null;
    'effectif_personnel': number | null;
    'effectif_personnel_total': number | null;
    'presence_locaux_sommeil': boolean | null;
    'presence_locaux_sommeil_au_dessus_r1': boolean | null;
    'niveau_total': number | null;
    'surface_totale': number | null;
    'surface_accessible_au_public': number | null;
    'r143_20': boolean | null;
    'batiment_etages_en_superstructure': number | null;
    'batiment_etages_en_infrastructure': number | null;
    'etablissement_de_plain_pied': boolean | null;
    'plancher_bas_du_dernier_niveau': PlancherBasDuDernierNiveauEnum | null;
    'plancher_bas_du_dernier_niveau_accessible_au_public': PlancherBasDuDernierNiveauAccessibleAuPublicEnum | null;
    'voie_engin': boolean | null;
    'voie_echelle': boolean | null;
    'nombre_facades_accessibles': number | null;
    'informations_acces_facades': string | null;
    'espace_libre': boolean | null;
    'desserte_informations_complementaires': string | null;
    'presence_erp_ou_tiers_contigus': boolean | null;
    'isolement_contigus_realise_degre_cf': IsolementContigusRealiseDegreCfEnum | null;
    'isolement_contigus_realise_degre_cf_autre_precision': string | null;
    'isolement_contigus_informations_complementaires': string | null;
    'air_libre': AirLibreEnum | null;
    'vis_a_vis': VisAVisEnum | null;
    'isolement_vis_a_vis_informations_complementaires': string | null;
    'presence_erp_ou_tiers_superpose': boolean | null;
    'isolement_superpose_realise_degre_cf': IsolementSuperposeRealiseDegreCfEnum | null;
    'isolement_superpose_realise_degre_cf_autre_precision': string | null;
    'isolement_superpose_informations_complementaires': string | null;
    'structure_sf': StructureSfEnum | null;
    'plancher_sf': PlancherSfEnum | null;
    'stabilite_au_feu_informations_complementaires': string | null;
    'isolement_autre_description': string | null;
    'construction_structures_description': string | null;
    'construction_couverture_description': string | null;
    'construction_facades_description': string | null;
    'type_cloisonnement': Array<TypeCloisonnementEnum> | null;
    'construction_distribution_interieure_informations_complementaires': string | null;
    'locaux': Array<Local> | null;
    'construction_conduits_et_gaines_description': string | null;
    'construction_amenagements_interieurs_description': string | null;
    'degagement_normaux': Array<Degagement> | null;
    'degagements_accessoires': Array<Degagement> | null;
    'degagement_exigibles_informations_complementaires': string | null;
    'degagement_supplementaires': Array<Degagement> | null;
    'degagement_escaliers_description': string | null;
    'degagement_ascenseurs_escaliers_mecaniques_trottoirs_roulants_description': string | null;
    'presence_eas_ou_equivalents': boolean | null;
    'degagement_espaces_attente_securises_informations_complementaires': string | null;
    'degagement_tribunes_et_gradins_non_demontables_description': string | null;
    'enfouissement': boolean | null;
    'degagement_enfouissement_informations_complementaires': string | null;
    'presence_desenfumage_mécanique': boolean | null;
    'presence_desenfumage_naturel': boolean | null;
    'ventilation_desenfumage_informations_complementaires': string | null;
    'groupe_electrogene': boolean | null;
    'batteries_accumulateurs_et_materiels_associes': boolean | null;
    'photovoltaique': boolean | null;
    'parafoudre': boolean | null;
    'electricite_eclairage_informations_complementaires': string | null;
    'puissance_chaufferie': PuissanceChaufferieEnum | null;
    'presence_gaz_chaufferie': boolean | null;
    'type_de_chauffage': Array<TypeDeChauffageEnum> | null;
    'chauffage_ventilation_informations_complementaires': string | null;
    'puissance_cuisine': PuissanceCuisineEnum | null;
    'type_de_cuisine': TypeDeCuisineEnum | null;
    'presence_gaz_cuisine': boolean | null;
    'systeme_extraction': boolean | null;
    'risques_spéciaux_informations_complementaires': string | null;
    'presence_extincteur': boolean | null;
    'presence_ria': boolean | null;
    'deversoirs_ponctuels': boolean | null;
    'elements_de_constructions_irrigues': boolean | null;
    'presence_deci': boolean | null;
    'presence_colonnes_seches': boolean | null;
    'presence_colonnes_en_charge': boolean | null;
    'installation_extinction': InstallationExtinctionEnum | null;
    'moyens_de_secours_informations_complementaires': string | null;
    'deci_description': string | null;
    'affichage_des_plans_intervention': boolean | null;
    'tour_incendie': boolean | null;
    'tremie_attaque': boolean | null;
    'service_de_securite_incendie': ServiceDeSecuriteIncendieEnum | null;
    'presence_pc_securite': boolean | null;
    'service_de_securite_incendie_informations_complementaires': string | null;
    'systeme_de_securite_incendie': boolean | null;
    'type_ssi': TypeSsiEnum | null;
    'type_alarme': TypeAlarmeEnum | null;
    'temporisation_alarme_en_minutes': number | null;
    'desenfumage_commande_par_le_ssi': boolean | null;
    'ligne_telephonique_reliee_au_cta': boolean | null;
    'autre_systeme_alerte': AutreSystemeAlerteEnum | null;
    'systeme_securite_incendie_informations_complementaires': string | null;
    'defibrillateur': boolean | null;
    'specificites_informations_complementaires': string | null;
};

export enum ActivitePrincipaleEnum {
    CTS___CHPITEAUX = 'CTS - Châpiteaux',
    CTS___STRUCTURES = 'CTS - Structures',
    CTS___TENTES = 'CTS - Tentes',
    EF___BATEAUX_EN_STATIONNEMENT_SUR_LES_EAUX_INTRIEURES = 'EF - Bateaux en stationnement sur les eaux intérieures',
    EF___BATEAUX_STATIONNAIRES = 'EF - Bateaux stationnaires',
    EF___ETABLISSEMENTS_FLOTTANTS = 'EF - Etablissements flottants',
    GA___GARES = 'GA - Gares',
    GEEM___GRANDS_TABLISSEMENTS__EXPLOITATION_MULTIPLE = 'GEEM - Grands établissements à exploitation multiple',
    J___ETABLISSEMENTS_DENSEIGNEMENT_AVEC_INTERNAT_POUR_JEUNES_HANDICAPS_OU_INADAPTS = 'J - Etablissements d\'enseignement avec internat pour jeunes handicapés ou inadaptés',
    J___ETABLISSEMENTS_DHBERGEMENT_POUR_ADULTES_HANDICAPS = 'J - Etablissements d\'hébergement pour adultes handicapés',
    J___ETABLISSEMENTS_MDICO_DUCATIFS_AVEC_INTERNAT_POUR_JEUNES_HANDICAPS_OU_INADAPTS = 'J - Etablissements médico-éducatifs avec internat pour jeunes handicapés ou inadaptés',
    J___STRUCTURES_DACCUEIL_POUR_PERSONNES_GES = 'J - Structures d\'accueil pour personnes âgées',
    J___STRUCTURES_DACCUEIL_POUR_PERSONNES_HANDICAPES = 'J - Structures d\'accueil pour personnes handicapées',
    L___CABARETS = 'L - Cabarets',
    L___SALLES_DAUDITION = 'L - Salles d\'audition',
    L___SALLE_DE_CONFRENCES = 'L - Salle de conférences',
    L___SALLES_DE_PARI = 'L - Salles de pari',
    L___SALLES_DE_PROJECTION = 'L - Salles de projection',
    L___SALLES_DE_QUARTIER__OU_ASSIMILE = 'L - Salles de quartier (ou assimilée)',
    L___SALLES_DE_RUNIONS = 'L - Salles de réunions',
    L___SALLES_DE_SPECTACLES = 'L - Salles de spectacles',
    L___SALLES_MULTIMDIA = 'L - Salles multimédia',
    L___SALLES_POLYVALENTES__DOMINANTE_SPORTIVE_DONT_LA_SUPERFICIE_UNITAIRE_EST_SUPRIEURE_OU_GALE__1_200_M2 = 'L - Salles polyvalentes à dominante sportive, dont la superficie unitaire est supérieure ou égale à 1 200 m2',
    L___SALLES_POLYVALENTES_NON_VISE_PAR_LE_TYPE_X__SALLE_POLYVALENTE_QUI_NA_PAS_UNE_DESTINATION_UNIQUE = 'L - Salles polyvalentes non visée par le Type X (salle polyvalente qui n\'a pas une destination unique)',
    L___SALLES_RSERVES_AUX_ASSOCIATIONS = 'L - Salles réservées aux associations',
    M___AIRES_DE_VENTE = 'M - Aires de vente',
    M___CENTRES_COMMERCIAUX = 'M - Centres commerciaux',
    M___LOCAUX_DE_VENTE = 'M - Locaux de vente',
    M___MAGASIN_DE_VENTE = 'M - Magasin de vente',
    N___BARS = 'N - Bars',
    N___BRASSERIES = 'N - Brasseries',
    N___CAFTARIA = 'N - Cafétaria',
    N___CAFS = 'N - Cafés',
    N___CANTINES = 'N - Cantines',
    N___DBITS_DE_BOISSONS = 'N - Débits de boissons',
    N___RESTAURANTS = 'N - Restaurants',
    O___HTELS = 'O - Hôtels',
    O___PENSIONS_DE_FAMILLE = 'O - Pensions de famille',
    OA___HTELS_RESTAURANTS_DALTITUDE = 'OA - Hôtels-restaurants d\'altitude',
    P___SALLE_DE_BALS = 'P - Salle de bals',
    P___DANCING___DISCOTHQUE = 'P - Dancing / discothèque',
    P___SALLES_DE_JEUX = 'P - Salles de jeux',
    PA___ARNES = 'PA - Arènes',
    PA___HIPPODROMES = 'PA - Hippodromes',
    PA___PISCINES = 'PA - Piscines',
    PA___PISTES_DE_PATINAGE = 'PA - Pistes de patinage',
    PA___STADES = 'PA - Stades',
    PA___TERRAINS_DE_SPORT = 'PA - Terrains de sport',
    PA___PARC_DATTRACTION = 'PA - Parc d\'attraction',
    PE_2_2___LOCAUX__USAGE_COLLECTIF_DUNE_SURFACE_UNITAIRE_SUPRIEURE__50_MTRES_CARRS_DES_LOGEMENTS_FOYERS_ET_DE_LHABITAT_DE_LOISIRS__GESTION_COLLECTIVE = 'PE 2 §2 - Locaux à usage collectif d\'une surface unitaire supérieure à 50 mètres carrés des logements-foyers et de l\'habitat de loisirs à gestion collective',
    PE_2_2___BTIMENTS_OU_LOCAUX__USAGE_DHBERGEMENT_QUI_NE_RELVENT_DAUCUN_TYPE_DFINI__LARTICLE_GN_1_ET_QUI_PERMETTENT_DACCUEILLIR_PLUS_DE_15_ET_MOINS_DE_100_PERSONNES_NY_LISANT_PAS_DOMICILE = 'PE 2 §2 - Bâtiments ou locaux à usage d\'hébergement qui ne relèvent d\'aucun type défini à l\'article GN 1 et qui permettent d\'accueillir plus de 15 et moins de 100 personnes n\'y élisant pas domicile',
    PE_2_2___HBERGEMENT_DE_MINEURS_EN_DEHORS_DE_LEURS_FAMILLES_LE_SEUIL_DE_LEFFECTIF_EST_FIX__7_MINEURS = 'PE 2 §2 - Hébergement de mineurs en dehors de leurs familles, le seuil de l\'effectif est fixé à 7 mineurs',
    PE_2_2___MAISONS_DASSISTANTS_MATERNELS__MAM_DONT_LES_LOCAUX_ACCESSIBLES_AU_PUBLIC_SONT_STRICTEMENT_LIMITS__UN_SEUL_TAGE_SUR_REZ_DE_CHAUSSE_ET_DONT_LEFFECTIF_NE_DPASSE_PAS_16_ENFANTS = 'PE 2 §2 - Maisons d\'assistants maternels (MAM) dont les locaux accessibles au public sont strictement limités à un seul étage sur rez-de-chaussée et dont l\'effectif ne dépasse pas 16 enfants',
    PS___PARCS_DE_STATIONNEMENT_COUVERTS = 'PS - Parcs de stationnement couverts',
    PS___PARC_DE_STATIONNEMENT_MIXTE = 'PS - Parc de stationnement mixte',
    PS___PARC_DE_STATIONNEMENT_LARGEMENT_VENTIL = 'PS - Parc de stationnement largement ventilé',
    PS___PARC_DE_STATIONNEMENT__RANGEMENT_AUTOMATIS = 'PS - Parc de stationnement à rangement automatisé',
    R___AUBERGES_DE_JEUNESSE__COMPRENANT_AU_MOINS_UN_LOCAL_COLLECTIF__SOMMEIL = 'R - Auberges de jeunesse (comprenant au moins un local collectif à sommeil)',
    R___AUTO_COLES = 'R - Auto-écoles',
    R___CENTRES_ARS = 'R - Centres aérés',
    R___CENTRES_DE_LOISIRS__SANS_HBERGEMENT = 'R - Centres de loisirs (sans hébergement)',
    R___CENTRES_DE_VACANCES = 'R - Centres de vacances',
    R___COLONIES_DE_VACANCES = 'R - Colonies de vacances',
    R___CRCHES = 'R - Crèches',
    R___ECOLES_MATERNELLES = 'R - Ecoles maternelles',
    R___ETABLISSEMENTS_DENSEIGNEMENT = 'R - Etablissements d\'enseignement',
    R___ETABLISSEMENTS_DE_FORMATION = 'R - Etablissements de formation',
    R___HALTES_GARDERIES = 'R - Haltes-garderies',
    R___INTERNATS_DES_TABLISSEMENTS_DE_LENSEIGNEMENT_PRIMAIRE_ET_SECONDAIRE = 'R - Internats des établissements de l\'enseignement primaire et secondaire',
    R___JARDINS_DENFANT = 'R - Jardins d\'enfant',
    R___LYCEE_PUBLIC = 'R - Lycee public',
    R___COLLGE_PUBLIC = 'R - Collège public',
    R___LYCEE_PRIV = 'R - Lycee privé',
    R___COLLGE_PRIV = 'R - Collège privé',
    R___COLE_LMENTAIRE = 'R - École élémentaire',
    REF___REFUGES_DE_MONTAGNE = 'REF - Refuges de montagne',
    S___BIBLIOTHQUES = 'S - Bibliothèques',
    S___CENTRES_DE_DOCUMENTATION_ET_DE_CONSULTATION_DARCHIVES = 'S - Centres de documentation et de consultation d\'archives',
    SG___STRUCTURES_GONFLABLES = 'SG - Structures gonflables',
    T___ETABLISSEMENTS__VOCATION_COMMERCIALE_DESTINS__DES_EXPOSITIONS = 'T - Etablissements à vocation commerciale destinés à des expositions',
    T___FOIRES_EXPOSITIONS = 'T - Foires-expositions',
    T___SALLES_DEXPOSITIONS__CARACTRE_PERMANENT_NAYANT_PAS_UNE_VOCATION_DE_FOIRE_OU_DE_SALON = 'T - Salles d\'expositions à caractère permanent n\'ayant pas une vocation de foire ou de salon',
    T___SALLES_DEXPOSITIONS__CARACTRE_PERMANENT_DE_VHICULES_AUTOMOBILES_BATEAUX_MACHINES_ET_AUTRES_VOLUMINEUX_BIENS_DQUIPEMENTS_ASSIMILABLES = 'T - Salles d\'expositions à caractère permanent de véhicules automobiles, bateaux, machines et autres volumineux biens d\'équipements assimilables',
    T___SALONS__CARACTRE_TEMPORAIRE = 'T - Salons à caractère temporaire',
    U___ETABLISSEMENTS_DE_CURE_THERMALE_OU_DE_THALASSOTHRAPIE = 'U - Etablissements de cure thermale ou de thalassothérapie',
    U___ETABLISSEMENTS_DE_SANT_PUBLICS_OU_PRIVS_DISPENSANT_DES_SOINS_DE_COURTE_DURE_EN_MDECINE_CHIRURGIE_OBSTTRIQUE = 'U - Etablissements de santé publics ou privés dispensant des soins de courte durée en médecine, chirurgie, obstétrique',
    U___ETABLISSEMENTS_DE_SANT_PUBLICS_OU_PRIVS_DISPENSANT_DES_SOINS_DE_PSYCHIATRIE_DE_SUITE_OU_DE_RADAPTATION_DES_SOINS_DE_LONGUE_DURE__DES_PERSONNES_NAYANT_PAS_LEUR_AUTONOMIE_DE_VIE_DONT_LTAT_NCESSITE_UNE_SURVEILLANCE_MDICALE_CONSTANTE = 'U - Etablissements de santé publics ou privés dispensant des soins de psychiatrie, de suite ou de réadaptation, des soins de longue durée, à des personnes n\'ayant pas leur autonomie de vie dont l\'état nécessite une surveillance médicale constante',
    U___POUPONNIRES__ENFANTS_DE_MOINS_DE_3_ANS = 'U - Pouponnières (enfants de moins de 3 ans)',
    V___EGLISES = 'V - Eglises',
    V___MOSQUES = 'V - Mosquées',
    V___SYNAGOGUES = 'V - Synagogues',
    V___TEMPLES = 'V - Temples',
    W___ADMINISTRATIONS = 'W - Administrations',
    W___BANQUES = 'W - Banques',
    W___BUREAUX = 'W - Bureaux',
    X___MANGES = 'X - Manèges',
    X___PATINOIRES = 'X - Patinoires',
    X___PISCINES_COUVERTES_TRANSFORMABLES_ET_MIXTES = 'X - Piscines couvertes, transformables et mixtes',
    X___SALLES_DDUCATION_PHYSIQUE_ET_SPORTIVE = 'X - Salles d\'éducation physique et sportive',
    X___SALLES_OMNISPORTS = 'X - Salles omnisports',
    X___SALLES_POLYVALENTES__DOMINANTE_SPORTIVE_DONT_LAIRE_DACTIVIT_EST_INFRIEURE__1200_M_ET_LA_HAUTEUR_SOUS_PLAFOND_SUPRIEURE_OU_GALE__650_MTRES = 'X - Salles polyvalentes à dominante sportive, dont l\'aire d\'activité est inférieure à 1200 m² et la hauteur sous plafond supérieure ou égale à 6,50 mètres',
    X___SALLES_SPORTIVES_SPCIALISES = 'X - Salles sportives spécialisées',
    Y___MUSES = 'Y - Musées',
    Y___SALLES_DESTINES__RECEVOIR_DES_EXPOSITIONS__VOCATION_CULTURELLE_SCIENTIFIQUE_TECHNIQUE_ARTISTIQUE_ETC__AYANT_UN_CARACTRE_TEMPORAIRE = 'Y - Salles destinées à recevoir des expositions à vocation culturelle, scientifique, technique, artistique, etc. ayant un caractère temporaire'
}

export enum ActivitesSecondaireEnum {
    CTS___CHPITEAUX = 'CTS - Châpiteaux',
    CTS___STRUCTURES = 'CTS - Structures',
    CTS___TENTES = 'CTS - Tentes',
    EF___BATEAUX_EN_STATIONNEMENT_SUR_LES_EAUX_INTRIEURES = 'EF - Bateaux en stationnement sur les eaux intérieures',
    EF___BATEAUX_STATIONNAIRES = 'EF - Bateaux stationnaires',
    EF___ETABLISSEMENTS_FLOTTANTS = 'EF - Etablissements flottants',
    GA___GARES = 'GA - Gares',
    GEEM___GRANDS_TABLISSEMENTS__EXPLOITATION_MULTIPLE = 'GEEM - Grands établissements à exploitation multiple',
    J___ETABLISSEMENTS_DENSEIGNEMENT_AVEC_INTERNAT_POUR_JEUNES_HANDICAPS_OU_INADAPTS = 'J - Etablissements d\'enseignement avec internat pour jeunes handicapés ou inadaptés',
    J___ETABLISSEMENTS_DHBERGEMENT_POUR_ADULTES_HANDICAPS = 'J - Etablissements d\'hébergement pour adultes handicapés',
    J___ETABLISSEMENTS_MDICO_DUCATIFS_AVEC_INTERNAT_POUR_JEUNES_HANDICAPS_OU_INADAPTS = 'J - Etablissements médico-éducatifs avec internat pour jeunes handicapés ou inadaptés',
    J___STRUCTURES_DACCUEIL_POUR_PERSONNES_GES = 'J - Structures d\'accueil pour personnes âgées',
    J___STRUCTURES_DACCUEIL_POUR_PERSONNES_HANDICAPES = 'J - Structures d\'accueil pour personnes handicapées',
    L___CABARETS = 'L - Cabarets',
    L___SALLES_DAUDITION = 'L - Salles d\'audition',
    L___SALLE_DE_CONFRENCES = 'L - Salle de conférences',
    L___SALLES_DE_PARI = 'L - Salles de pari',
    L___SALLES_DE_PROJECTION = 'L - Salles de projection',
    L___SALLES_DE_QUARTIER__OU_ASSIMILE = 'L - Salles de quartier (ou assimilée)',
    L___SALLES_DE_RUNIONS = 'L - Salles de réunions',
    L___SALLES_DE_SPECTACLES = 'L - Salles de spectacles',
    L___SALLES_MULTIMDIA = 'L - Salles multimédia',
    L___SALLES_POLYVALENTES__DOMINANTE_SPORTIVE_DONT_LA_SUPERFICIE_UNITAIRE_EST_SUPRIEURE_OU_GALE__1_200_M2 = 'L - Salles polyvalentes à dominante sportive, dont la superficie unitaire est supérieure ou égale à 1 200 m2',
    L___SALLES_POLYVALENTES_NON_VISE_PAR_LE_TYPE_X__SALLE_POLYVALENTE_QUI_NA_PAS_UNE_DESTINATION_UNIQUE = 'L - Salles polyvalentes non visée par le Type X (salle polyvalente qui n\'a pas une destination unique)',
    L___SALLES_RSERVES_AUX_ASSOCIATIONS = 'L - Salles réservées aux associations',
    M___AIRES_DE_VENTE = 'M - Aires de vente',
    M___CENTRES_COMMERCIAUX = 'M - Centres commerciaux',
    M___LOCAUX_DE_VENTE = 'M - Locaux de vente',
    M___MAGASIN_DE_VENTE = 'M - Magasin de vente',
    N___BARS = 'N - Bars',
    N___BRASSERIES = 'N - Brasseries',
    N___CAFTARIA = 'N - Cafétaria',
    N___CAFS = 'N - Cafés',
    N___CANTINES = 'N - Cantines',
    N___DBITS_DE_BOISSONS = 'N - Débits de boissons',
    N___RESTAURANTS = 'N - Restaurants',
    O___HTELS = 'O - Hôtels',
    O___PENSIONS_DE_FAMILLE = 'O - Pensions de famille',
    OA___HTELS_RESTAURANTS_DALTITUDE = 'OA - Hôtels-restaurants d\'altitude',
    P___SALLE_DE_BALS = 'P - Salle de bals',
    P___DANCING___DISCOTHQUE = 'P - Dancing / discothèque',
    P___SALLES_DE_JEUX = 'P - Salles de jeux',
    PA___ARNES = 'PA - Arènes',
    PA___HIPPODROMES = 'PA - Hippodromes',
    PA___PISCINES = 'PA - Piscines',
    PA___PISTES_DE_PATINAGE = 'PA - Pistes de patinage',
    PA___STADES = 'PA - Stades',
    PA___TERRAINS_DE_SPORT = 'PA - Terrains de sport',
    PA___PARC_DATTRACTION = 'PA - Parc d\'attraction',
    PE_2_2___LOCAUX__USAGE_COLLECTIF_DUNE_SURFACE_UNITAIRE_SUPRIEURE__50_MTRES_CARRS_DES_LOGEMENTS_FOYERS_ET_DE_LHABITAT_DE_LOISIRS__GESTION_COLLECTIVE = 'PE 2 §2 - Locaux à usage collectif d\'une surface unitaire supérieure à 50 mètres carrés des logements-foyers et de l\'habitat de loisirs à gestion collective',
    PE_2_2___BTIMENTS_OU_LOCAUX__USAGE_DHBERGEMENT_QUI_NE_RELVENT_DAUCUN_TYPE_DFINI__LARTICLE_GN_1_ET_QUI_PERMETTENT_DACCUEILLIR_PLUS_DE_15_ET_MOINS_DE_100_PERSONNES_NY_LISANT_PAS_DOMICILE = 'PE 2 §2 - Bâtiments ou locaux à usage d\'hébergement qui ne relèvent d\'aucun type défini à l\'article GN 1 et qui permettent d\'accueillir plus de 15 et moins de 100 personnes n\'y élisant pas domicile',
    PE_2_2___HBERGEMENT_DE_MINEURS_EN_DEHORS_DE_LEURS_FAMILLES_LE_SEUIL_DE_LEFFECTIF_EST_FIX__7_MINEURS = 'PE 2 §2 - Hébergement de mineurs en dehors de leurs familles, le seuil de l\'effectif est fixé à 7 mineurs',
    PE_2_2___MAISONS_DASSISTANTS_MATERNELS__MAM_DONT_LES_LOCAUX_ACCESSIBLES_AU_PUBLIC_SONT_STRICTEMENT_LIMITS__UN_SEUL_TAGE_SUR_REZ_DE_CHAUSSE_ET_DONT_LEFFECTIF_NE_DPASSE_PAS_16_ENFANTS = 'PE 2 §2 - Maisons d\'assistants maternels (MAM) dont les locaux accessibles au public sont strictement limités à un seul étage sur rez-de-chaussée et dont l\'effectif ne dépasse pas 16 enfants',
    PS___PARCS_DE_STATIONNEMENT_COUVERTS = 'PS - Parcs de stationnement couverts',
    PS___PARC_DE_STATIONNEMENT_MIXTE = 'PS - Parc de stationnement mixte',
    PS___PARC_DE_STATIONNEMENT_LARGEMENT_VENTIL = 'PS - Parc de stationnement largement ventilé',
    PS___PARC_DE_STATIONNEMENT__RANGEMENT_AUTOMATIS = 'PS - Parc de stationnement à rangement automatisé',
    R___AUBERGES_DE_JEUNESSE__COMPRENANT_AU_MOINS_UN_LOCAL_COLLECTIF__SOMMEIL = 'R - Auberges de jeunesse (comprenant au moins un local collectif à sommeil)',
    R___AUTO_COLES = 'R - Auto-écoles',
    R___CENTRES_ARS = 'R - Centres aérés',
    R___CENTRES_DE_LOISIRS__SANS_HBERGEMENT = 'R - Centres de loisirs (sans hébergement)',
    R___CENTRES_DE_VACANCES = 'R - Centres de vacances',
    R___COLONIES_DE_VACANCES = 'R - Colonies de vacances',
    R___CRCHES = 'R - Crèches',
    R___ECOLES_MATERNELLES = 'R - Ecoles maternelles',
    R___ETABLISSEMENTS_DENSEIGNEMENT = 'R - Etablissements d\'enseignement',
    R___ETABLISSEMENTS_DE_FORMATION = 'R - Etablissements de formation',
    R___HALTES_GARDERIES = 'R - Haltes-garderies',
    R___INTERNATS_DES_TABLISSEMENTS_DE_LENSEIGNEMENT_PRIMAIRE_ET_SECONDAIRE = 'R - Internats des établissements de l\'enseignement primaire et secondaire',
    R___JARDINS_DENFANT = 'R - Jardins d\'enfant',
    R___LYCEE_PUBLIC = 'R - Lycee public',
    R___COLLGE_PUBLIC = 'R - Collège public',
    R___LYCEE_PRIV = 'R - Lycee privé',
    R___COLLGE_PRIV = 'R - Collège privé',
    R___COLE_LMENTAIRE = 'R - École élémentaire',
    REF___REFUGES_DE_MONTAGNE = 'REF - Refuges de montagne',
    S___BIBLIOTHQUES = 'S - Bibliothèques',
    S___CENTRES_DE_DOCUMENTATION_ET_DE_CONSULTATION_DARCHIVES = 'S - Centres de documentation et de consultation d\'archives',
    SG___STRUCTURES_GONFLABLES = 'SG - Structures gonflables',
    T___ETABLISSEMENTS__VOCATION_COMMERCIALE_DESTINS__DES_EXPOSITIONS = 'T - Etablissements à vocation commerciale destinés à des expositions',
    T___FOIRES_EXPOSITIONS = 'T - Foires-expositions',
    T___SALLES_DEXPOSITIONS__CARACTRE_PERMANENT_NAYANT_PAS_UNE_VOCATION_DE_FOIRE_OU_DE_SALON = 'T - Salles d\'expositions à caractère permanent n\'ayant pas une vocation de foire ou de salon',
    T___SALLES_DEXPOSITIONS__CARACTRE_PERMANENT_DE_VHICULES_AUTOMOBILES_BATEAUX_MACHINES_ET_AUTRES_VOLUMINEUX_BIENS_DQUIPEMENTS_ASSIMILABLES = 'T - Salles d\'expositions à caractère permanent de véhicules automobiles, bateaux, machines et autres volumineux biens d\'équipements assimilables',
    T___SALONS__CARACTRE_TEMPORAIRE = 'T - Salons à caractère temporaire',
    U___ETABLISSEMENTS_DE_CURE_THERMALE_OU_DE_THALASSOTHRAPIE = 'U - Etablissements de cure thermale ou de thalassothérapie',
    U___ETABLISSEMENTS_DE_SANT_PUBLICS_OU_PRIVS_DISPENSANT_DES_SOINS_DE_COURTE_DURE_EN_MDECINE_CHIRURGIE_OBSTTRIQUE = 'U - Etablissements de santé publics ou privés dispensant des soins de courte durée en médecine, chirurgie, obstétrique',
    U___ETABLISSEMENTS_DE_SANT_PUBLICS_OU_PRIVS_DISPENSANT_DES_SOINS_DE_PSYCHIATRIE_DE_SUITE_OU_DE_RADAPTATION_DES_SOINS_DE_LONGUE_DURE__DES_PERSONNES_NAYANT_PAS_LEUR_AUTONOMIE_DE_VIE_DONT_LTAT_NCESSITE_UNE_SURVEILLANCE_MDICALE_CONSTANTE = 'U - Etablissements de santé publics ou privés dispensant des soins de psychiatrie, de suite ou de réadaptation, des soins de longue durée, à des personnes n\'ayant pas leur autonomie de vie dont l\'état nécessite une surveillance médicale constante',
    U___POUPONNIRES__ENFANTS_DE_MOINS_DE_3_ANS = 'U - Pouponnières (enfants de moins de 3 ans)',
    V___EGLISES = 'V - Eglises',
    V___MOSQUES = 'V - Mosquées',
    V___SYNAGOGUES = 'V - Synagogues',
    V___TEMPLES = 'V - Temples',
    W___ADMINISTRATIONS = 'W - Administrations',
    W___BANQUES = 'W - Banques',
    W___BUREAUX = 'W - Bureaux',
    X___MANGES = 'X - Manèges',
    X___PATINOIRES = 'X - Patinoires',
    X___PISCINES_COUVERTES_TRANSFORMABLES_ET_MIXTES = 'X - Piscines couvertes, transformables et mixtes',
    X___SALLES_DDUCATION_PHYSIQUE_ET_SPORTIVE = 'X - Salles d\'éducation physique et sportive',
    X___SALLES_OMNISPORTS = 'X - Salles omnisports',
    X___SALLES_POLYVALENTES__DOMINANTE_SPORTIVE_DONT_LAIRE_DACTIVIT_EST_INFRIEURE__1200_M_ET_LA_HAUTEUR_SOUS_PLAFOND_SUPRIEURE_OU_GALE__650_MTRES = 'X - Salles polyvalentes à dominante sportive, dont l\'aire d\'activité est inférieure à 1200 m² et la hauteur sous plafond supérieure ou égale à 6,50 mètres',
    X___SALLES_SPORTIVES_SPCIALISES = 'X - Salles sportives spécialisées',
    Y___MUSES = 'Y - Musées',
    Y___SALLES_DESTINES__RECEVOIR_DES_EXPOSITIONS__VOCATION_CULTURELLE_SCIENTIFIQUE_TECHNIQUE_ARTISTIQUE_ETC__AYANT_UN_CARACTRE_TEMPORAIRE = 'Y - Salles destinées à recevoir des expositions à vocation culturelle, scientifique, technique, artistique, etc. ayant un caractère temporaire'
}

export enum CategorieEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5
}

export enum GroupementEtablissementEnum {
    NON_CONCERN = 'Non concerné',
    GROUPEMENT_DTABLISSEMENT_ISOL__GN3 = 'Groupement d\'établissement isolé (GN3)',
    GROUPEMENT_DTABLISSEMENT_NON_ISOL__GN2 = 'Groupement d\'établissement non isolé (GN2)',
    BTIMENT_UNIQUE = 'Bâtiment unique'
}

export enum PlancherBasDuDernierNiveauEnum {
    _8M = '<8m',
    _8M2 = '=>8m'
}

export enum PlancherBasDuDernierNiveauAccessibleAuPublicEnum {
    _8M = '<8m',
    _8M2 = '=>8m'
}

export enum IsolementContigusRealiseDegreCfEnum {
    _1H = '1h',
    _2H = '2h',
    _3H = '3h',
    AUTRE = 'Autre',
    NON_CONCERN = 'Non concerné'
}

export enum AirLibreEnum {
    _DE_4M = '- de 4m',
    _4M_OU_PLUS = '4m ou plus',
    _5M_OU_PLUS = '5m ou plus',
    _DE_8M = '- de 8m',
    _8M_OU_PLUS = '8m ou plus',
    NON_CONCERN = 'Non concerné'
}

export enum VisAVisEnum {
    _DE_5M = '- de 5m',
    _5M_OU_PLUS = '5m ou plus',
    _8M_OU_PLUS = '8m ou plus',
    _DE_8M = '- de 8m',
    NON_CONCERN = 'Non concerné'
}

export enum IsolementSuperposeRealiseDegreCfEnum {
    _1H = '1h',
    _2H = '2h',
    _3H = '3h',
    AUTRE = 'Autre',
    NON_CONCERN = 'Non concerné'
}

export enum StructureSfEnum {
    _1_2H = '1/2h',
    _1H = '1h',
    _2H = '2h',
    _3H = '3h',
    AUTRE = 'Autre'
}

export enum PlancherSfEnum {
    _1_2H = '1/2h',
    _1H = '1h',
    _2H = '2h',
    _3H = '3h',
    AUTRE = 'Autre'
}

export enum TypeCloisonnementEnum {
    TRADITIONNELS = 'Traditionnels',
    SECTEURS = 'Secteurs',
    COMPARTIMENTS = 'Compartiments'
}

export enum PuissanceChaufferieEnum {
    _70K_W = '<=70kW',
    _70K_W2 = '>70kW',
    NON = 'Non'
}

export enum TypeDeChauffageEnum {
    SOUS_STATION = 'Sous-station',
    CHAUFFERIE = 'Chaufferie',
    CLIMATISATION = 'Climatisation',
    AEROTHERMIQUE = 'Aerothermique',
    ROOFTOP = 'Rooftop',
    CHAUFFAGE_URBAIN = 'Chauffage urbain',
    AUTRE = 'Autre'
}

export enum PuissanceCuisineEnum {
    _20K_W = '<=20kW',
    _20K_W2 = '>20kW',
    NON = 'Non'
}

export enum TypeDeCuisineEnum {
    OUVERTE = 'Ouverte',
    FERME = 'Fermée'
}

export enum InstallationExtinctionEnum {
    AUTOMATIQUE = 'Automatique',
    MANUELLE = 'Manuelle',
    AUTRE = 'Autre'
}

export enum ServiceDeSecuriteIncendieEnum {
    PERSONNEL_DSIGN_ET_FORM = 'Personnel désigné et formé',
    SSIAP = 'SSIAP',
    SAPEURS_POMPIERS = 'Sapeurs-pompiers',
    COMBINAISON_DES_DIFFRENTES_POSSIBILITS = 'Combinaison des différentes possibilités'
}

export enum TypeSsiEnum {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    E = 'E'
}

export enum TypeAlarmeEnum {
    _1 = '1',
    _2_A = '2A',
    _2_B = '2B',
    _3 = '3',
    _4 = '4'
}

export enum AutreSystemeAlerteEnum {
    TELEPHONE_URBAIN_FIXE_OU_BOX_SECOURUE = 'Telephone urbain fixe ou box secourue',
    GSM = 'GSM'
}
