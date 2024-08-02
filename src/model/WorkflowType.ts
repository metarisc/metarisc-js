import { WorkflowStep } from './WorkflowStep';

export type WorkflowType = {
    'dossier_type'?: string;
    'steps'?: Array<WorkflowStep>;
};
