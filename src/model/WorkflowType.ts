import { WorkflowTypeWorkflow } from '../../src/model/WorkflowTypeWorkflow';

export type WorkflowType = {
    'name'?: string;
    'workflow'?: WorkflowTypeWorkflow;
    'needs'?: Array<string>;
};
