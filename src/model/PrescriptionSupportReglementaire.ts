export type PrescriptionSupportReglementaire = {
    'id'?: string;
    'nature'?: NatureEnum;
    'legifrance_cid'?: string;
    'contenu'?: string;
    'titre'?: string;
    'etat'?: EtatEnum;
    'reference'?: string;
};

export enum NatureEnum {
    Arrete = 'arrete',
    Article = 'article',
    Local = 'local'
}

export enum EtatEnum {
    EnVigueur = 'en_vigueur'
}
