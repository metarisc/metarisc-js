// File generated from our OpenAPI spec
import { DonneesHydrauliques } from './DonneesHydrauliques';
import { PEI } from './PEI';
import { TourneeDeciPeiListeAnomalies } from './TourneeDeciPeiListeAnomalies';

export type TourneeDeciPei = {
    'id': string;
    'date_du_controle': Date | null;
    'hydraulique': DonneesHydrauliques | null;
    'liste_anomalies': Array<TourneeDeciPeiListeAnomalies>;
    'essais_engin_utilise': EssaisEnginUtiliseEnum | null;
    'pei': PEI;
    'est_controle': boolean;
    'ordre': number;
};

export enum EssaisEnginUtiliseEnum {
    AUCUN = 'aucun',
    FPT = 'fpt',
    MPR = 'mpr',
    CCF = 'ccf'
}
