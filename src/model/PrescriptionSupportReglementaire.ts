export type PrescriptionSupportReglementaire = {
    'id'?: string;
    'nature'?: NatureEnum;
    'legifrance_cid'?: string;
    'contenu'?: string;
};

export enum NatureEnum {
    Arrete = 'arrete',
    Article = 'article',
    Local = 'local'
}
