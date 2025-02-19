// File generated from our OpenAPI spec

import { DescriptifTechniqueDECIBase } from './DescriptifTechniqueDECIBase';

export type DescriptifTechniquePIBI = DescriptifTechniqueDECIBase & { 

    'surpression': number | null;

    'est_surpresse': boolean | null;

    'nature': NatureEnum;

    'debit_1bar': number | null;

    'pression': number | null;

    'pression_statique': number | null;

    'debit_gueule_bee': number | null;
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

export enum NatureEnum {
    PI1X65 = 'PI1x65',
    PI1X65_PI2X45 = 'PI1x65+PI2x45',
    PI1X100 = 'PI1x100',
    PI2X100 = 'PI2x100',
    BI1X65 = 'BI1x65',
    BI1X80 = 'BI1x80',
    BI1X100 = 'BI1x100',
    BI2X100 = 'BI2x100'
}
