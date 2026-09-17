// File generated from our OpenAPI spec
import { MainCouranteArrete } from './MainCouranteArrete';
import { MainCouranteCourriel } from './MainCouranteCourriel';
import { MainCouranteIntervention } from './MainCouranteIntervention';
import { MainCouranteReunion } from './MainCouranteReunion';

export type MainCourante = {
    'id': string;
    'objet': string;
    'date': Date;
    'compte_rendu': string;
    'type': TypeEnum;
    'main_courante_intervention'?: Array<MainCouranteIntervention> | null;
    'main_courante_reunion'?: Array<MainCouranteReunion> | null;
    'main_courante_courriel'?: Array<MainCouranteCourriel> | null;
    'main_courante_arrete'?: Array<MainCouranteArrete> | null;
};

export enum TypeEnum {
    REUNION = 'REUNION',
    INTERVENTION = 'INTERVENTION',
    COURRIER_COURRIEL = 'COURRIER_COURRIEL',
    ARRETE = 'ARRETE'
}
