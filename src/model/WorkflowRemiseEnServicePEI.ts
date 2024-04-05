import { WorkflowBase } from '../model/WorkflowBase';

export type WorkflowRemiseEnServicePEI = WorkflowBase & { 
    'pei_lie'?: string;
    'anomalies_levees'?: Array<string>;
};

export enum EtatEnum {
    Valide = 'VALIDE',
    EnCours = 'EN_COURS',
    Attente = 'ATTENTE'
}
