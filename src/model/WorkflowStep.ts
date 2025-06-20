// File generated from our OpenAPI spec
import { WorkflowStepWorflowData } from './WorkflowStepWorflowData';

export type WorkflowStep = {
    'name': string;
    'workflow': WorkflowStepWorflowData;
    'needs': Array<string>;
};
