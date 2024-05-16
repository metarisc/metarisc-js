export type FeedMessageBase = {
    'id'?: string;
    'titre'?: string;
    'date_de_creation'?: Date;
    'type'?: TypeEnum;
};

export enum TypeEnum {
    Texte = 'texte',
    ListePei = 'liste_pei'
}
