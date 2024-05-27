import { Avis } from '../../src/model/Avis';
import { Dossier } from '../../src/model/Dossier';

export type PassageCommissionDossier = {
    'id'?: string;
    'dossier'?: Dossier;
    'dossier_id'?: string;
    'avis'?: Avis;
    'statut'?: StatutEnum;
};

export enum StatutEnum {
    EnAttenteDeTraitement = 'En attente de traitement',
    PrsenceDunAvisDuRapporteur = 'Présence d\'un avis du rapporteur',
    Valid = 'Validé',
    PrsenceDunAvisDeCommission = 'Présence d\'un avis de commission'
}
