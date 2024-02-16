import { WorkflowBase } from '../model/WorkflowBase';

export type WorkflowRemiseEnServicePEI = WorkflowBase & { 
    'pei_lie'?: string;
    'anomalies_levees'?: Array<string>;
};
