// File generated from our OpenAPI spec
import { AdressePostale } from './AdressePostale';
import { DescriptifTechniqueERP } from './DescriptifTechniqueERP';
import { ReferenceExterieure } from './ReferenceExterieure';
import { SiteGeographique } from './SiteGeographique';

export type ERP = {
    'id': string;
    'date_de_realisation': Date;
    'date_de_derniere_mise_a_jour': Date | null;
    'implantation': AdressePostale;
    'descriptif_technique'?: DescriptifTechniqueERP;
    'avis_exploitation': AvisExploitationEnum | null;
    'date_pc_initial': Date | null;
    'date_ouverture': Date | null;
    'date_derniere_visite': Date | null;
    'notes_internes': string | null;
    'references_exterieures': Array<ReferenceExterieure>;
    'a_visiter_en': string | null;
    'sites_geographiques': Array<SiteGeographique>;
};

export enum AvisExploitationEnum {
    FAVORABLE = 'favorable',
    DEFAVORABLE = 'defavorable'
}
