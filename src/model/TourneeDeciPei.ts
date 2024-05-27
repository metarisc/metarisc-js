import { PEI } from '../../src/model/PEI';
import { TourneeDeciPeiListeAnomaliesInner } from '../../src/model/TourneeDeciPeiListeAnomaliesInner';

export type TourneeDeciPei = {
    'id'?: string;
    'date_du_controle'?: Date;
    'liste_anomalies'?: Array<TourneeDeciPeiListeAnomaliesInner>;
    'essais_engin_utilise'?: EssaisEnginUtiliseEnum;
    'pei_id'?: string;
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
