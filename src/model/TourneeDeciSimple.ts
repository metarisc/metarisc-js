import { TourneeDeciModele } from './TourneeDeciModele';

import { TourneeDeciBase } from './TourneeDeciBase';

export type TourneeDeciSimple = TourneeDeciBase & { 

    'pourcentage'?: number;

    'est_terminee'?: boolean;

    'date_de_debut'?: Date;

    'date_de_fin'?: Date;

    'modele'?: TourneeDeciModele;
};

export enum TypeEnum {
    Deci = 'tournee_deci',
    DeciModele = 'tournee_deci_modele'
}
