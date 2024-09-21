import { TourneeDeciModele } from './TourneeDeciModele';
import { TourneeDeciSimple } from './TourneeDeciSimple';

export type TourneeDeci = TourneeDeciSimple | TourneeDeciModele;

export enum TypeEnum {
    Deci = 'tournee_deci',
    DeciModele = 'tournee_deci_modele'
}
