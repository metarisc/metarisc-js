import { WorkflowStepWorkflow } from '../../src/model/WorkflowStepWorkflow';

export type WorkflowStep = {
    'name'?: string;
    'workflow'?: WorkflowStepWorkflow;
    'needs'?: Array<string>;
};
