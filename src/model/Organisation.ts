// File generated from our OpenAPI spec

export type Organisation = {
    'id': string;
    'nom': string;
    'logo_url': string | null;
    'type': TypeEnum;
};

export enum TypeEnum {
    SIS = 'sis'
}
