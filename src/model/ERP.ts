import { AdressePostale } from './AdressePostale';
import { Avis } from './Avis';
import { DescriptifTechniqueERP } from './DescriptifTechniqueERP';

export type ERP = {
    'id'?: string;
    'date_de_realisation'?: Date;
    'date_de_derniere_mise_a_jour'?: Date;
    'implantation'?: AdressePostale;
    'descriptif_technique'?: DescriptifTechniqueERP;
    'avis_exploitation'?: Avis;
};
