import { PassageCommission } from '../../src/model/PassageCommission';

import { WorkflowBase } from '../model/WorkflowBase';

export type WorkflowVisite = WorkflowBase & { 
    'passage_commission'?: PassageCommission;
};

export enum EtatEnum {
    Valide = 'VALIDE',
    EnCours = 'EN_COURS',
    Attente = 'ATTENTE'
}
