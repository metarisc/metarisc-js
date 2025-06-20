// File generated from our OpenAPI spec

export type SiteGeographique = {
    'id': string;
    'libelle': string;
    'geojson': string;
    'erp_periodicite_contrainte': number | null;
    'notes': string;
    'type': TypeEnum;
};

export enum TypeEnum {
    FONCTIONNEL = 'fonctionnel',
    GEOGRAPHIQUE = 'géographique'
}
