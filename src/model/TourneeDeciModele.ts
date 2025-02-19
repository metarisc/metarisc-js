// File generated from our OpenAPI spec

import { TourneeDeciBase } from './TourneeDeciBase';

export type TourneeDeciModele = TourneeDeciBase & { 

    'type': TypeEnum;

    'mois_debut': number;

    'mois_fin': number;
};

export enum TypeEnum {
    TOURNEE_DECI_MODELE = 'tournee_deci_modele'
}
