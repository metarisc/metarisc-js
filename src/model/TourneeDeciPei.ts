import { AnomaliePEI } from '../../src/model/AnomaliePEI';
import { PEI } from '../../src/model/PEI';

export type TourneeDeciPei = {
    'id'?: string;
    'date_du_controle'?: Date;
    'liste_anomalies'?: Array<AnomaliePEI>;
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
