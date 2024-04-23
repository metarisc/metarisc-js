export type PostTourneeDeciRequest = {
    'libelle'?: string;
    'description'?: string;
    'date_de_debut'?: Date;
    'date_de_fin'?: Date;
    'mois_debut'?: number;
    'mois_fin'?: number;
    'modele_id'?: string;
    'type'?: TypeEnum;
};

export enum TypeEnum {
    Deci = 'tournee_deci',
    DeciModele = 'tournee_deci_modele',
    DeciFromModele = 'tournee_deci_from_modele'
}
