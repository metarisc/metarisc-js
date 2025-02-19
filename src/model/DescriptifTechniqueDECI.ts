// File generated from our OpenAPI spec
import { DescriptifTechniquePENA } from './DescriptifTechniquePENA';
import { DescriptifTechniquePIBI } from './DescriptifTechniquePIBI';

export type DescriptifTechniqueDECI = DescriptifTechniquePIBI | DescriptifTechniquePENA;

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
    POINT_ASPIRATION = 'POINT_ASPIRATION',
    CITERNE_AERIENNE = 'CITERNE_AERIENNE',
    CITERNE_ENTERREE = 'CITERNE_ENTERREE',
    CITERNE_SEMI_ENTERREE = 'CITERNE_SEMI_ENTERREE',
    CITERNE_SOUPLE = 'CITERNE_SOUPLE',
    RESERVE_AERIENNE = 'RESERVE_AERIENNE',
    POTEAU_RELAIS = 'POTEAU_RELAIS',
    PUISARD_ASPIRATION = 'PUISARD_ASPIRATION',
    PRISE_DEPORTEE = 'PRISE_DEPORTEE',
    POTEAU_ASPIRATION_1X100 = 'POTEAU_ASPIRATION_1x100',
    POTEAU_ASPIRATION_2X100 = 'POTEAU_ASPIRATION_2x100',
    BOUCHE_ASPIRATION_1X100 = 'BOUCHE_ASPIRATION_1x100'
}
