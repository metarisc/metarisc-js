// File generated from our OpenAPI spec
import { WorkflowStepWorkflow } from './WorkflowStepWorkflow';

export type WorkflowStep = {
    'name': string;
    'workflow': WorkflowStepWorkflow;
    'needs': Array<string>;
};
