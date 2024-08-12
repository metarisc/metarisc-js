import { Dossier } from './Dossier';

import { WorkflowBase } from './WorkflowBase';

export type WorkflowDossiersLies = WorkflowBase & { 

    'dossier_lie'?: Array<Dossier>;
};

export enum EtatEnum {
    Valide = 'VALIDE',
    EnCours = 'EN_COURS',
    Attente = 'ATTENTE'
}
