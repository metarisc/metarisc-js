import { AdressePostale } from '../../src/model/AdressePostale';
import { DescriptifTechniqueDECI } from '../../src/model/DescriptifTechniqueDECI';

export type PostPeiRequest = {
    'implantation'?: AdressePostale;
    'numero'?: string;
    'numero_compteur'?: string;
    'numero_serie_appareil'?: string;
    'descriptif_technique'?: DescriptifTechniqueDECI;
};
