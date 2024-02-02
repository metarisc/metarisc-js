import { AdressePostale } from '../../src/model/AdressePostale';
import { DescriptifTechnique } from '../../src/model/DescriptifTechnique';
import { PEIReferencesExterieuresInner } from '../../src/model/PEIReferencesExterieuresInner';

export type PEI = {
    'id'?: string;
    'date_de_realisation'?: Date;
    'date_de_derniere_mise_a_jour'?: Date;
    'statut'?: string;
    'references_exterieures'?: Array<PEIReferencesExterieuresInner>;
    'descriptif_technique'?: DescriptifTechnique;
    'geometrie'?: string;
    'adresse_postale'?: AdressePostale;
};
