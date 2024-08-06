import { PassageCommission } from './PassageCommission';

import { WorkflowBase } from './WorkflowBase';

export type WorkflowVisite = WorkflowBase & { 

    'passage_commission'?: PassageCommission;
};

export enum EtatEnum {
    Valide = 'VALIDE',
    EnCours = 'EN_COURS',
    Attente = 'ATTENTE'
}
