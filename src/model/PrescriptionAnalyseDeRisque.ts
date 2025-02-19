// File generated from our OpenAPI spec

import { Prescription } from './Prescription';

export type PrescriptionAnalyseDeRisque = Prescription & { 

    'numero': number;
};

export enum TypeEnum {
    LIEE_A_L_EXPLOITATION = 'liee_a_l_exploitation',
    LIEE_A_L_AMELIORATION = 'liee_a_l_amelioration',
    RAPPEL_REGLEMENTAIRE = 'rappel_reglementaire'
}
