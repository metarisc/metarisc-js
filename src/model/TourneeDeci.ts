import { TourneeDeciModele } from '../../src/model/TourneeDeciModele';

export type TourneeDeci = {
    'id'?: string;
    'libelle'?: string;
    'description'?: string;
    'date_de_creation'?: Date;
    'type'?: TypeEnum;
    'pourcentage'?: number;
    'est_terminee'?: boolean;
    'date_de_debut'?: Date;
    'date_de_fin'?: Date;
    'modele'?: TourneeDeciModele;
    'modele_id'?: string;
    'mois_debut'?: number;
    'mois_fin'?: number;
};

export enum TypeEnum {
    Deci = 'tournee_deci',
    DeciModele = 'tournee_deci_modele'
}
