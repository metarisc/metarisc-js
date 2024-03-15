export type PassageCommission = {
    'id'?: string;
    'date_debut'?: Date;
    'date_fin'?: Date;
    'type'?: TypeEnum;
};

export enum TypeEnum {
    Salle = 'salle',
    VisiteDeSecurite = 'visite_de_securite',
    GroupeDeVisite = 'groupe_de_visite'
}
