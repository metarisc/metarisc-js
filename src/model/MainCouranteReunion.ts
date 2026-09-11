// File generated from our OpenAPI spec

export type MainCouranteReunion = {
    'nature': NatureEnum;
    'date_creation'?: Date | null;
    'demandeur'?: string | null;
    'observations'?: string | null;
    'date_reunion'?: Date | null;
    'lieu_reunion'?: string | null;
};

export enum NatureEnum {
    LOCAUX_SDIS = 'LOCAUX_SDIS',
    EXTERIEUR_SDIS = 'EXTERIEUR_SDIS',
    TELEPHONIQUE = 'TELEPHONIQUE'
}
