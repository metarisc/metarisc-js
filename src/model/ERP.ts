import { AdressePostale } from '../../src/model/AdressePostale';
import { Contact } from '../../src/model/Contact';
import { DescriptifTechniqueERP } from '../../src/model/DescriptifTechniqueERP';
import { ERPReferencesExterieuresInner } from '../../src/model/ERPReferencesExterieuresInner';

/**
* Les établissements recevant du public (ERP) sont des bâtiments, des locaux ou des enceintes dans lesquels sont admises des personnes extérieures.
*/
export type ERP = {
    'id'?: string;
    'date_de_realisation'?: Date;
    'date_de_derniere_mise_a_jour'?: Date;
    'references_exterieures'?: Array<ERPReferencesExterieuresInner>;
    'implantation'?: AdressePostale;
    'descriptif_technique'?: DescriptifTechniqueERP;
    'coordonnees'?: Contact;
};
