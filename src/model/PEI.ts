import { AdressePostale } from '../../src/model/AdressePostale';
import { DescriptifTechniqueDECIBase } from '../../src/model/DescriptifTechniqueDECIBase';
import { PEIReferencesExterieuresInner } from '../../src/model/PEIReferencesExterieuresInner';

export type PEI = {
    'id'?: string;
    'date_de_realisation'?: Date;
    'date_de_derniere_mise_a_jour'?: Date;
    'references_exterieures'?: Array<PEIReferencesExterieuresInner>;
    'descriptif_technique'?: DescriptifTechniqueDECIBase;
    'implantation'?: AdressePostale;
    'genre'?: GenreEnum;
    'numero'?: string;
    'numero_compteur'?: string;
};

export enum GenreEnum {
    Pi1x65 = 'PI1x65',
    Pi1x65Pi2x45 = 'PI1x65+PI2x45',
    Pi1x100 = 'PI1x100',
    Pi2x100 = 'PI2x100',
    Bi1x65 = 'BI1x65',
    Bi1x80 = 'BI1x80',
    Bi1x100 = 'BI1x100',
    Bi2x100 = 'BI2x100',
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
