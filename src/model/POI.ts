import { AdressePostale } from '../../src/model/AdressePostale';
import { DescriptifTechnique } from '../../src/model/DescriptifTechnique';
import { POIReferencesExterieuresInner } from '../../src/model/POIReferencesExterieuresInner';

export type POI = {
    'id'?: string;
    'dateDeRealisation'?: Date;
    'dateDeDerniereMiseAJour'?: Date;
    'statut'?: string;
    'referencesExterieures'?: Array<POIReferencesExterieuresInner>;
    'descriptifTechnique'?: DescriptifTechnique;
    'geometrie'?: string;
    'adressePostale'?: AdressePostale;
};
