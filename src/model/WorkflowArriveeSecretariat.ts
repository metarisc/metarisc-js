import { PassageCommission } from '../../src/model/PassageCommission';

import { WorkflowBase } from '../model/WorkflowBase';

export type WorkflowArriveeSecretariat = WorkflowBase & { 
    'date_arrivee_secretariat'?: Date;
    'passage_commission'?: PassageCommission;
};

export enum EtatEnum {
    Valide = 'VALIDE',
    EnCours = 'EN_COURS',
    Attente = 'ATTENTE'
}
