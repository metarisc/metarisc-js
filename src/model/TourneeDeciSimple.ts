import { TourneeDeciModele } from '../../src/model/TourneeDeciModele';

import { TourneeDeciBase } from '../model/TourneeDeciBase';

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
