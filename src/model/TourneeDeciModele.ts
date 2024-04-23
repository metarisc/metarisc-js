import { TourneeDeciBase } from '../model/TourneeDeciBase';

export type TourneeDeciModele = TourneeDeciBase & { 
    'mois_debut'?: string;
    'mois_fin'?: string;
};

export enum TypeEnum {
    Deci = 'tournee_deci',
    DeciModele = 'tournee_deci_modele'
}
