import { WorkflowDossiersLies } from '../../src/model/WorkflowDossiersLies';
import { WorkflowPassageCommissionSecurite } from '../../src/model/WorkflowPassageCommissionSecurite';
import { WorkflowRemiseEnServicePEI } from '../../src/model/WorkflowRemiseEnServicePEI';

export type Workflow = WorkflowDossiersLies | WorkflowRemiseEnServicePEI | WorkflowPassageCommissionSecurite;
