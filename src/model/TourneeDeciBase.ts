export type TourneeDeciBase = {
    'id'?: string;
    'libelle'?: string;
    'description'?: string;
    'date_creation'?: Date;
    'type'?: TypeEnum;
};

export enum TypeEnum {
    Deci = 'tournee_deci',
    DeciModele = 'tournee_deci_modele'
}
