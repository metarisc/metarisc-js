
import { WorkflowBase } from '../model/WorkflowBase';


export type WorkflowRemiseEnServicePEI = WorkflowBase & { 
    'peiLie'?: string;
    'anomaliesLevees'?: Array<string>;
};

