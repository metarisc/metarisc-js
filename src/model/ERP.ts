import { AdressePostale } from './AdressePostale';
import { Avis } from './Avis';
import { DescriptifTechniqueERP } from './DescriptifTechniqueERP';
import { ReferenceExterieure } from './ReferenceExterieure';

export type ERP = {
    'id'?: string;
    'date_de_realisation'?: Date;
    'date_de_derniere_mise_a_jour'?: Date;
    'references_exterieures'?: Array<ReferenceExterieure>;
    'implantation'?: AdressePostale;
    'descriptif_technique'?: DescriptifTechniqueERP;
    'avis_exploitation'?: Avis;
};
