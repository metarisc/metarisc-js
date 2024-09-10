import { Avis } from './Avis';
import { Dossier } from './Dossier';

export type PassageCommissionDossier = {
    'id'?: string;
    'dossier'?: Dossier;
    'avis'?: Avis;
    'date_de_passage'?: Date;
    'statut'?: StatutEnum;
};

export enum StatutEnum {
    EnAttenteDeTraitement = 'En attente de traitement',
    PrsenceDunAvisDuRapporteur = 'Présence d\'un avis du rapporteur',
    Valid = 'Validé',
    PrsenceDunAvisDeCommission = 'Présence d\'un avis de commission'
}
