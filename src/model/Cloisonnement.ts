// File generated from our OpenAPI spec

export type Cloisonnement = {
    'type': TypeEnum | null;
    'localisation': string | null;
    'observations': string | null;
};

export enum TypeEnum {
    TRADITIONNELS = 'Traditionnels',
    SECTEURS = 'Secteurs',
    COMPARTIMENTS = 'Compartiments'
}
