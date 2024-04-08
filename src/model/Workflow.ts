import { WorkflowAnalyseDeRisque } from '../../src/model/WorkflowAnalyseDeRisque';
import { WorkflowArriveeSecretariat } from '../../src/model/WorkflowArriveeSecretariat';
import { WorkflowConsultationSis } from '../../src/model/WorkflowConsultationSis';
import { WorkflowDossiersLies } from '../../src/model/WorkflowDossiersLies';
import { WorkflowPassageCommissionSecurite } from '../../src/model/WorkflowPassageCommissionSecurite';
import { WorkflowRelectureSecretariat } from '../../src/model/WorkflowRelectureSecretariat';
import { WorkflowRemiseEnServicePEI } from '../../src/model/WorkflowRemiseEnServicePEI';
import { WorkflowValidation } from '../../src/model/WorkflowValidation';
import { WorkflowVisite } from '../../src/model/WorkflowVisite';

export type Workflow = WorkflowDossiersLies | WorkflowRemiseEnServicePEI | WorkflowPassageCommissionSecurite | WorkflowAnalyseDeRisque | WorkflowArriveeSecretariat | WorkflowConsultationSis | WorkflowValidation | WorkflowVisite | WorkflowRelectureSecretariat;

export enum EtatEnum {
    Valide = 'VALIDE',
    EnCours = 'EN_COURS',
    Attente = 'ATTENTE'
}
