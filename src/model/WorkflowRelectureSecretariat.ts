import { WorkflowBase } from './WorkflowBase';

export type WorkflowRelectureSecretariat = WorkflowBase & { 

    'est_relu'?: boolean;
};

export enum EtatEnum {
    Valide = 'VALIDE',
    EnCours = 'EN_COURS',
    Attente = 'ATTENTE'
}
