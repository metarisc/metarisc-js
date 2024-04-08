import { WorkflowStep } from '../../src/model/WorkflowStep';

export type WorkflowType = {
    'dossier_type'?: string;
    'steps'?: Array<WorkflowStep>;
};
