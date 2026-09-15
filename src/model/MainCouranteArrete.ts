// File generated from our OpenAPI spec

export type MainCouranteArrete = {
    'nature': NatureEnum;
    'date_creation'?: Date | null;
    'observations'?: string | null;
    'date_signature'?: Date | null;
};

export enum NatureEnum {
    OUVERTURE = 'OUVERTURE',
    FERMETURE = 'FERMETURE',
    MISE_EN_DEMEURE = 'MISE_EN_DEMEURE',
    UTILISATION_EXCEPTIONNELLE_LOCAUX = 'UTILISATION_EXCEPTIONNELLE_LOCAUX'
}
