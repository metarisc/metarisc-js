import { Commission } from './Commission';

import { WorkflowBase } from './WorkflowBase';

export type WorkflowConsultationSis = WorkflowBase & { 

    'commission'?: Commission;
};

export enum EtatEnum {
    Valide = 'VALIDE',
    EnCours = 'EN_COURS',
    Attente = 'ATTENTE'
}
