import { Avis } from '../../src/model/Avis';
import { Dossier } from '../../src/model/Dossier';

export type PassageCommissionDossier = {
    'id'?: string;
    'dossier'?: Dossier;
    'avis'?: Avis;
    'statut'?: string;
};
