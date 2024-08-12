import { DescriptifTechniqueDECIBase } from './DescriptifTechniqueDECIBase';

export type DescriptifTechniquePIBI = DescriptifTechniqueDECIBase & { 

    'surpression'?: number;

    'nature'?: NatureEnum;

    'debit_1bar'?: number;

    'pression'?: number;

    'pression_statique'?: number;

    'debit_gueule_bee'?: number;
};

export enum TypeEnum {
    Pibi = 'PIBI',
    Pena = 'PENA'
}

export enum DomanialiteEnum {
    Privee = 'privee',
    Publique = 'publique',
    PriveeConventionnee = 'privee_conventionnee'
}

export enum StatutEnum {
    RepriseDeDonnees = 'reprise_de_donnees',
    DeclarationEnCours = 'declaration_en_cours',
    ReconnaissanceOperationnelleInitiale = 'reconnaissance_operationnelle_initiale',
    Actif = 'actif',
    Projet = 'projet',
    Reforme = 'reforme'
}

export enum NatureEnum {
    Pi1x65 = 'PI1x65',
    Pi1x65Pi2x45 = 'PI1x65+PI2x45',
    Pi1x100 = 'PI1x100',
    Pi2x100 = 'PI2x100',
    Bi1x65 = 'BI1x65',
    Bi1x80 = 'BI1x80',
    Bi1x100 = 'BI1x100',
    Bi2x100 = 'BI2x100'
}
