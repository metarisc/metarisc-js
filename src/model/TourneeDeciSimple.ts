// File generated from our OpenAPI spec
import { TourneeDeciModele } from './TourneeDeciModele';

import { TourneeDeciBase } from './TourneeDeciBase';

export type TourneeDeciSimple = TourneeDeciBase & { 

    'type': TypeEnum;

    'pourcentage': number | null;

    'est_terminee': boolean | null;

    'date_de_debut': Date;

    'date_de_fin': Date;

    'modele': TourneeDeciModele | null;
};

export enum TypeEnum {
    TOURNEE_DECI = 'tournee_deci'
}
