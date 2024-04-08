import { Commission } from '../../src/model/Commission';

import { WorkflowBase } from '../model/WorkflowBase';

export type WorkflowConsultationSis = WorkflowBase & { 
    'commission'?: Commission;
};

export enum EtatEnum {
    Valide = 'VALIDE',
    EnCours = 'EN_COURS',
    Attente = 'ATTENTE'
}
