import { UpdateTourneeDeciPeiRequestListeAnomaliesInner } from '../../src/model/UpdateTourneeDeciPeiRequestListeAnomaliesInner';

export type UpdateTourneeDeciPeiRequest = {
    'engin_utilise'?: EnginUtiliseEnum;
    'ordre'?: number;
    'date_du_controle'?: Date;
    'liste_anomalies'?: Array<UpdateTourneeDeciPeiRequestListeAnomaliesInner>;
};

export enum EnginUtiliseEnum {
    Aucun = 'aucun',
    Fpt = 'fpt',
    Mpr = 'mpr',
    Ccf = 'ccf'
}
