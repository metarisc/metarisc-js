import { WorkflowStepWorkflow } from './WorkflowStepWorkflow';

export type WorkflowStep = {
    'name'?: string;
    'workflow'?: WorkflowStepWorkflow;
    'needs'?: Array<string>;
};
