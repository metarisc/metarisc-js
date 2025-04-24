// File generated from our OpenAPI spec

export type TexteApplicable = {
    'texte': string;
    'type': TypeEnum;
};

export enum TypeEnum {
    DISPOSITIONS_GENERALES = 'Dispositions générales',
    DISPOSITIONS_PARTICULIERES = 'Dispositions particulières',
    DISPOSITIONS_ETABLISSEMENT_DE_5EME_CAT = 'Dispositions établissement de 5ème Cat',
    DISPOSITIONS_SPECIALES = 'Dispositions spéciales',
    TEXTES_RELATIFS_AUX_BATIMENTS_DHABITATION = 'Textes relatifs aux bâtiments d’habitation',
    TEXTES_RELATIFS_AUX_IMMEUBLES_DE_GRANDE_HAUTEUR = 'Textes relatifs aux immeubles de grande hauteur'
}
