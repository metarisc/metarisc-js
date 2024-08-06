import { Avis } from './Avis';

import { Prescription } from "./Prescription";

export type WorkflowAnalyseDeRisque = {
    'observations'?: string;
    'analyse_de_risque'?: string;
    'avis_rapporteur'?: Avis;
    'descriptif_effectifs'?: string;
    'facteur_dangerosite'?: number;
    'derogations'?: string;
    'prescriptions'?: Array<Prescription>;
    'mesures_compensatoires'?: string;
    'mesures_complementaires'?: string;
};
