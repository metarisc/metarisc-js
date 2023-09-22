import { WorkflowBase } from '../model/WorkflowBase';

export type WorkflowDossiersLies = WorkflowBase & { 
    'dossier_lie'?: string;
};
