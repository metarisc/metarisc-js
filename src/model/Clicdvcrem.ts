import { ActiviteErp } from './ActiviteErp';
import { Degagement } from './Degagement';

export type Clicdvcrem = {
    'activite_principale'?: ActiviteErp;
    'activites_secondaire'?: Array<ActiviteErp> | null;
    'categorie'?: CategorieEnum | null;
    'effectif_public'?: number | null;
    'effectif_personnel'?: number | null;
    'presence_locaux_sommeil'?: boolean | null;
    'sous_sol_accessible_au_public'?: boolean | null;
    'surface_totale'?: number | null;
    'surface_accessible_au_public'?: number | null;
    'r143_20'?: boolean;
    'plancher_bas_du_dernier_niveau'?: PlancherBasDuDernierNiveauEnum | null;
    'plancher_bas_du_dernier_niveau_accessible_au_public'?: PlancherBasDuDernierNiveauAccessibleAuPublicEnum | null;
    'type_cloisonnement'?: TypeCloisonnementEnum | null;
    'locaux'?: LocauxEnum;
    'sprinklage'?: boolean | null;
    'degagement_normaux'?: Array<Degagement> | null;
    'degagements_accessoires'?: Array<Degagement> | null;
    'degagement_supplementaires'?: Array<Degagement> | null;
    'presence_eas_ou_equivalents'?: boolean | null;
    'presence_desenfumage_mécanique'?: boolean | null;
    'presence_desenfumage_naturel'?: boolean | null;
    'puissance_chaufferie'?: PuissanceChaufferieEnum | null;
    'presence_gaz_chaufferie'?: boolean | null;
    'puissance_cuisine'?: PuissanceCuisineEnum | null;
    'presence_gaz_cuisine'?: boolean | null;
    'presence_ria'?: boolean | null;
    'deversoirs_ponctuels'?: boolean | null;
    'elements_de_constructions_irrigues'?: boolean | null;
    'presence_deci'?: boolean | null;
    'presence_colonnes_seches'?: boolean | null;
    'presence_colonnes_en_charge'?: boolean | null;
    'installation_extinction'?: InstallationExtinctionEnum | null;
    'service_de_securite_incendie'?: ServiceDeSecuriteIncendieEnum | null;
    'type_ssi'?: TypeSsiEnum | null;
    'type_alarme'?: TypeAlarmeEnum | null;
    'temporisation_alarme_en_minutes'?: number | null;
    'desenfumage_commande_par_le_ssi'?: boolean | null;
    'nombre_de_zones_alarmes'?: number | null;
    'ligne_telephonique_reliee_au_cta'?: boolean | null;
    'parafoudre'?: boolean | null;
};

export enum CategorieEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5
}

export enum PlancherBasDuDernierNiveauEnum {
    _8m = '>8m',
    _8m2 = '<8m'
}

export enum PlancherBasDuDernierNiveauAccessibleAuPublicEnum {
    _8m = '>8m',
    _8m2 = '<8m'
}

export enum TypeCloisonnementEnum {
    Traditionnels = 'Traditionnels',
    Secteurs = 'Secteurs',
    Compartiments = 'Compartiments'
}

export enum LocauxEnum {
    Courant = 'Risque Courant',
    Moyen = 'Risque Moyen',
    Important = 'Risque Important'
}

export enum PuissanceChaufferieEnum {
    _70kW = '>70kW',
    _70kW2 = '<70kW',
    Non = 'Non'
}

export enum PuissanceCuisineEnum {
    _20kW = '>20kW',
    _20kW2 = '<20kW',
    Non = 'Non'
}

export enum InstallationExtinctionEnum {
    Automatique = 'Automatique',
    Manuelle = 'Manuelle',
    Autres = 'Autres'
}

export enum ServiceDeSecuriteIncendieEnum {
    PersonnelDsignEtForm = 'Personnel désigné et formé',
    Ssiap = 'SSIAP',
    SapeursPompiers = 'Sapeurs- pompiers',
    CombinaisonDesDiffrentesPossibilits = 'Combinaison des différentes possibilités',
    Non = 'Non'
}

export enum TypeSsiEnum {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    E = 'E',
    Non = 'Non'
}

export enum TypeAlarmeEnum {
    _1 = '1',
    _2A = '2A',
    _2B = '2B',
    _3 = '3',
    _4 = '4'
}
