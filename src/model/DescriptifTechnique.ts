import { DescriptifTechniquePENA } from '../../src/model/DescriptifTechniquePENA';
import { DescriptifTechniquePIBI } from '../../src/model/DescriptifTechniquePIBI';

export type DescriptifTechnique = DescriptifTechniquePIBI | DescriptifTechniquePENA;

export enum DomanialiteEnum {
    Privee = 'privee',
    Publique = 'publique',
    PriveeConventionnee = 'privee_conventionnee'
}

export enum NatureEnum {
    PointAspiration = 'POINT_ASPIRATION',
    CiterneAerienne = 'CITERNE_AERIENNE',
    CiterneEnterree = 'CITERNE_ENTERREE',
    CiterneSemiEnterree = 'CITERNE_SEMI_ENTERREE',
    CiterneSouple = 'CITERNE_SOUPLE',
    ReserveAerienne = 'RESERVE_AERIENNE',
    PoteauRelais = 'POTEAU_RELAIS',
    PuisardAspiration = 'PUISARD_ASPIRATION',
    PriseDeportee = 'PRISE_DEPORTEE',
    PoteauAspiration1x100 = 'POTEAU_ASPIRATION_1x100',
    PoteauAspiration2x100 = 'POTEAU_ASPIRATION_2x100',
    BoucheAspiration1x100 = 'BOUCHE_ASPIRATION_1x100'
}

export enum CaracteristiquesParticulieresEnum {
    Renversable = 'RENVERSABLE',
    PreMelange = 'PRE_MELANGE'
}

export enum EssaisEnginUtiliseEnum {
    Aucun = 'AUCUN',
    Fpt = 'FPT',
    Mpr = 'MPR',
    Ccf = 'CCF'
}

export enum EquipementsEnum {
    Guichet = 'GUICHET',
    CanneAspiration = 'CANNE_ASPIRATION',
    Puit = 'PUIT',
    TrouHomme = 'TROU_HOMME',
    RaccordTournant = 'RACCORD_TOURNANT',
    PriseDirecte = 'PRISE_DIRECTE'
}
