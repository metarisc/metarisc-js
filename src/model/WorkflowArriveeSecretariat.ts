import { PassageCommission } from './PassageCommission';

import { WorkflowBase } from './WorkflowBase';

export type WorkflowArriveeSecretariat = WorkflowBase & { 

    'date_arrivee_secretariat'?: Date;

    'passage_commission'?: PassageCommission;
};

export enum EtatEnum {
    Valide = 'VALIDE',
    EnCours = 'EN_COURS',
    Attente = 'ATTENTE'
}
