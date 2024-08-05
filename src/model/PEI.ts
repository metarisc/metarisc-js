import { AdressePostale } from './AdressePostale';
import { DescriptifTechniqueDECI } from './DescriptifTechniqueDECI';
import { ReferenceExterieure } from './ReferenceExterieure';

export type PEI = {
    'id'?: string;
    'date_de_realisation'?: Date;
    'date_de_derniere_mise_a_jour'?: Date;
    'references_exterieures'?: Array<ReferenceExterieure>;
    'descriptif_technique'?: DescriptifTechniqueDECI;
    'implantation'?: AdressePostale;
    'numero'?: string;
    'numero_compteur'?: string;
    'numero_serie_appareil'?: string;
};
