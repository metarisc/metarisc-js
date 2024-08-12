import { AnomalieDECI } from './AnomalieDECI';

export type AnomaliePEI = {
    'anomalie'?: AnomalieDECI;
    'date_debut'?: Date;
    'date_fin'?: Date;
    'est_programmee'?: boolean;
    'date_pose'?: Date;
};
