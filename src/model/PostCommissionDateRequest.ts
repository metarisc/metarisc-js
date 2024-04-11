export type PostCommissionDateRequest = {
    'libelle'?: string;
    'type'?: TypeEnum;
    'date_de_debut'?: Date;
    'date_de_fin'?: Date;
};

export enum TypeEnum {
    Salle = 'salle',
    VisiteDeSecurite = 'visite_de_securite',
    GroupeDeVisite = 'groupe_de_visite'
}
