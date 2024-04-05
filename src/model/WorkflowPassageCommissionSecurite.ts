import { Avis } from '../../src/model/Avis';
import { PassageCommission } from '../../src/model/PassageCommission';

import { WorkflowBase } from '../model/WorkflowBase';

export type WorkflowPassageCommissionSecurite = WorkflowBase & { 
    'commission_date'?: PassageCommission;
    'avis_de_commission'?: Avis;
};

export enum EtatEnum {
    Valide = 'VALIDE',
    EnCours = 'EN_COURS',
    Attente = 'ATTENTE'
}
