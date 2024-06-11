import { TourneeDeciBase } from '../model/TourneeDeciBase';

export type TourneeDeciModele = TourneeDeciBase & { 
    'mois_debut'?: number;
    'mois_fin'?: number;
};

export enum TypeEnum {
    Deci = 'tournee_deci',
    DeciModele = 'tournee_deci_modele'
}
