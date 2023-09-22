import { AnomalieDECI } from '../../src/model/AnomalieDECI';
import { DescriptifTechniquePIBIAllOfPesees } from '../../src/model/DescriptifTechniquePIBIAllOfPesees';

import { DescriptifTechniqueDECIBase } from '../model/DescriptifTechniqueDECIBase';

export type DescriptifTechniquePIBI = DescriptifTechniqueDECIBase & { 
    'numero_serie_appareil'?: string;
    /**
    * Surpression mesurée en bar
    */
    'surpression'?: number;
    'nature'?: NatureEnum;
    'caracteristiques_particulieres'?: CaracteristiquesParticulieresEnum;
    'pesees'?: DescriptifTechniquePIBIAllOfPesees;
};

export enum DomanialiteEnum {
    Privee = 'privee',
    Publique = 'publique',
    PriveeConventionnee = 'privee_conventionnee'
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
export enum CaracteristiquesParticulieresEnum {
    Renversable = 'RENVERSABLE',
    PreMelange = 'PRE_MELANGE'
}
