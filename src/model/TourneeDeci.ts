// File generated from our OpenAPI spec
import { TourneeDeciModele } from './TourneeDeciModele';
import { TourneeDeciSimple } from './TourneeDeciSimple';

export type TourneeDeci = TourneeDeciSimple | TourneeDeciModele;

export enum TypeEnum {
    TOURNEE_DECI = 'tournee_deci',
    TOURNEE_DECI_MODELE = 'tournee_deci_modele'
}
