import { WorkflowBase } from './WorkflowBase';

export type WorkflowValidation = WorkflowBase & { 

    'est_valide'?: boolean;
};

export enum EtatEnum {
    Valide = 'VALIDE',
    EnCours = 'EN_COURS',
    Attente = 'ATTENTE'
}
