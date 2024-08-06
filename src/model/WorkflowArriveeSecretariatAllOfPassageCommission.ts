export type WorkflowArriveeSecretariatAllOfPassageCommission = {
    'date_debut'?: Date;
    'date_fin'?: Date;
    'type'?: TypeEnum;
    'libelle'?: string;
};

export enum TypeEnum {
    Salle = 'salle',
    VisiteDeSecurite = 'visite_de_securite',
    GroupeDeVisite = 'groupe_de_visite'
}
