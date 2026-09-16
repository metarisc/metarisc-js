// File generated from our OpenAPI spec

export type ArretesPrefectoraux = {
    'id': string;
    'texte': string;
    'type': TypeEnum;
    'organisation_id'?: string | null;
};

export enum TypeEnum {
    ARRETES_PREFECTORAUX = 'Arrêtés préfectoraux'
}
