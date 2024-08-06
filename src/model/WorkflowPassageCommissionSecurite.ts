import { Avis } from './Avis';
import { PassageCommission } from './PassageCommission';

import { WorkflowBase } from './WorkflowBase';

export type WorkflowPassageCommissionSecurite = WorkflowBase & { 

    'commission_date'?: PassageCommission;

    'avis_de_commission'?: Avis;
};

export enum EtatEnum {
    Valide = 'VALIDE',
    EnCours = 'EN_COURS',
    Attente = 'ATTENTE'
}
