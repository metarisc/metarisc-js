// File generated from our OpenAPI spec

export type PieceJointe = {
    'id': string;
    'url': string;
    'nom': string;
    'description': string | null;
    'type': TypeEnum;
    'est_sensible': boolean;
};

export enum TypeEnum {
    PHOTO = 'photo',
    PLAN = 'plan',
    ANNEXE = 'annexe',
    DIVERS = 'divers'
}
