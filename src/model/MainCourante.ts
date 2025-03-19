// File generated from our OpenAPI spec

export type MainCourante = {
    'id': string;
    'objet': string;
    'date': Date;
    'compte_rendu': string;
    'type': TypeEnum;
};

export enum TypeEnum {
    REUNION = 'REUNION',
    INTERVENTION = 'INTERVENTION',
    RCCI = 'RCCI',
    RETEX = 'RETEX'
}
