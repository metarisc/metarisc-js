import { WorkflowDossiersLies } from '../../src/model/WorkflowDossiersLies';
import { WorkflowPassageCommissionSecurite } from '../../src/model/WorkflowPassageCommissionSecurite';
import { WorkflowRelectureSecretariat } from '../../src/model/WorkflowRelectureSecretariat';
import { WorkflowRemiseEnServicePEI } from '../../src/model/WorkflowRemiseEnServicePEI';

export type Workflow = WorkflowDossiersLies | WorkflowRemiseEnServicePEI | WorkflowPassageCommissionSecurite | WorkflowPassageCommissionSecurite | WorkflowPassageCommissionSecurite | WorkflowPassageCommissionSecurite | WorkflowPassageCommissionSecurite | WorkflowPassageCommissionSecurite | WorkflowRelectureSecretariat;

export enum EtatEnum {
    Valide = 'VALIDE',
    EnCours = 'EN_COURS',
    Attente = 'ATTENTE'
}
