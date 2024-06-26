import { Dossier } from '../../src/model/Dossier';

import { WorkflowBase } from '../model/WorkflowBase';

export type WorkflowDossiersLies = WorkflowBase & { 
    'dossier_lie'?: Array<Dossier>;
};

export enum EtatEnum {
    Valide = 'VALIDE',
    EnCours = 'EN_COURS',
    Attente = 'ATTENTE'
}
