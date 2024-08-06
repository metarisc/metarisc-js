import { Avis } from './Avis';
import { Prescription } from './Prescription';

import { WorkflowBase } from './WorkflowBase';

export type WorkflowAnalyseDeRisque = WorkflowBase & { 

    'analyse_de_risque'?: string;

    'avis_rapporteur'?: Avis;

    'descriptif_effectifs'?: string;

    'facteur_dangerosite'?: number;

    'derogations'?: string;

    'prescriptions'?: Array<Prescription>;

    'mesures_compensatoires'?: string;

    'mesures_complementaires'?: string;
};

export enum EtatEnum {
    Valide = 'VALIDE',
    EnCours = 'EN_COURS',
    Attente = 'ATTENTE'
}
