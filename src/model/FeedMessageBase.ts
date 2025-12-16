// File generated from our OpenAPI spec

export type FeedMessageBase = {
    'id': string;
    'titre': string;
    'date_de_creation': Date;
    'type': TypeEnum;
};

export enum TypeEnum {
    TEXTE = 'texte',
    LISTE_PEI = 'liste_pei',
    MESSAGE_UTILISATEUR = 'message_utilisateur'
}
