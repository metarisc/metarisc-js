import { PEI } from './PEI';
import { TourneeDeciPeiListeAnomaliesInner } from './TourneeDeciPeiListeAnomaliesInner';

export type TourneeDeciPei = {
    'id'?: string;
    'date_du_controle'?: Date;
    'liste_anomalies'?: Array<TourneeDeciPeiListeAnomaliesInner>;
    'essais_engin_utilise'?: EssaisEnginUtiliseEnum;
    'pei'?: PEI;
    'est_controle'?: boolean;
    'ordre'?: number;
};

export enum EssaisEnginUtiliseEnum {
    Aucun = 'aucun',
    Fpt = 'fpt',
    Mpr = 'mpr',
    Ccf = 'ccf'
}
