import { AdressePostale } from '../../src/model/AdressePostale';
import { DescriptifTechniqueDECI } from '../../src/model/DescriptifTechniqueDECI';
import { PEIReferencesExterieuresInner } from '../../src/model/PEIReferencesExterieuresInner';

export type PEI = {
    'id'?: string;
    'date_de_realisation'?: Date;
    'date_de_derniere_mise_a_jour'?: Date;
    'references_exterieures'?: Array<PEIReferencesExterieuresInner>;
    'descriptif_technique'?: DescriptifTechniqueDECI;
    'implantation'?: AdressePostale;
    'genre'?: GenreEnum;
    'numero'?: string;
    'numero_compteur'?: string;
    'numero_serie_appareil'?: string;
};

export enum GenreEnum {
    Pibi = 'PIBI',
    Pena = 'PENA'
}
