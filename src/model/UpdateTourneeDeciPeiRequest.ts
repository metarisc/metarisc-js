import { AnomaliePEI } from '../../src/model/AnomaliePEI';

export type UpdateTourneeDeciPeiRequest = {
    'liste_anomalies'?: Array<AnomaliePEI>;
    'engin_utilisé'?: string;
    'ordre'?: string;
    'date_du_controle'?: Date;
};
