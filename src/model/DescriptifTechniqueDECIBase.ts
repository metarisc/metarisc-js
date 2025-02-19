// File generated from our OpenAPI spec

export type DescriptifTechniqueDECIBase = {
    'id': string;
    'type': TypeEnum;
    'est_reglementaire': boolean | null;
    'domanialite': DomanialiteEnum | null;
    'est_conforme_rddeci': boolean | null;
    'performance_theorique': number;
    'performance_reelle': number;
    'observations_generales': string | null;
    'date': Date;
    'statut': StatutEnum;
    'est_disponible': boolean | null;
};

export enum TypeEnum {
    PIBI = 'PIBI',
    PENA = 'PENA'
}

export enum DomanialiteEnum {
    PRIVEE = 'privee',
    PUBLIQUE = 'publique',
    PRIVEE_CONVENTIONNEE = 'privee_conventionnee'
}

export enum StatutEnum {
    REPRISE_DE_DONNEES = 'reprise_de_donnees',
    DECLARATION_EN_COURS = 'declaration_en_cours',
    RECONNAISSANCE_OPERATIONNELLE_INITIALE = 'reconnaissance_operationnelle_initiale',
    ACTIF = 'actif',
    PROJET = 'projet',
    REFORME = 'reforme',
    DECLARATION_ABANDONNEE = 'declaration_abandonnee'
}
