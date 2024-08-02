import { WorkflowAnalyseDeRisque } from './WorkflowAnalyseDeRisque';
import { WorkflowArriveeSecretariat } from './WorkflowArriveeSecretariat';
import { WorkflowConsultationSis } from './WorkflowConsultationSis';
import { WorkflowDossiersLies } from './WorkflowDossiersLies';
import { WorkflowPassageCommissionSecurite } from './WorkflowPassageCommissionSecurite';
import { WorkflowRelectureSecretariat } from './WorkflowRelectureSecretariat';
import { WorkflowRemiseEnServicePEI } from './WorkflowRemiseEnServicePEI';
import { WorkflowValidation } from './WorkflowValidation';
import { WorkflowVisite } from './WorkflowVisite';

export type Workflow = WorkflowDossiersLies | WorkflowRemiseEnServicePEI | WorkflowPassageCommissionSecurite | WorkflowAnalyseDeRisque | WorkflowArriveeSecretariat | WorkflowConsultationSis | WorkflowValidation | WorkflowVisite | WorkflowRelectureSecretariat;

export enum EtatEnum {
    Valide = 'VALIDE',
    EnCours = 'EN_COURS',
    Attente = 'ATTENTE'
}
