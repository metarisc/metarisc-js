// File generated from our OpenAPI spec

export type PassageCommission = {
    'id': string;
    'date_debut': Date;
    'date_fin': Date;
    'type': TypeEnum;
    'libelle': string;
    'raison_reprogrammation': string | null;
};

export enum TypeEnum {
    SALLE = 'salle',
    VISITE_DE_SECURITE = 'visite_de_securite',
    GROUPE_DE_VISITE = 'groupe_de_visite',
    VISITE_RECEPTION_TRAVAUX = 'visite_reception_travaux',
    VISITE_PERIODIQUE = 'visite_periodique',
    VISITE_INOPINEE = 'visite_inopinee',
    VISITE_CONTROLE = 'visite_controle'
}
