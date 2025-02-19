// File generated from our OpenAPI spec

export type PrescriptionSupportReglementaire = {
    'id': string;
    'nature': NatureEnum;
    'legifrance_cid': string | null;
    'contenu'?: string;
    'titre'?: string;
    'etat': EtatEnum;
    'reference': string;
};

export enum NatureEnum {
    ARRETE = 'arrete',
    ARTICLE = 'article',
    LOCAL = 'local'
}

export enum EtatEnum {
    EN_VIGUEUR = 'en_vigueur'
}
