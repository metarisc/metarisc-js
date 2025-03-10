// File generated from our OpenAPI spec
import { Enveloppe } from './Enveloppe';
import { Tag } from './Tag';
import { Utilisateur } from './Utilisateur';

export type DossierBase = {
    'id': string;
    'objet': string;
    'date_de_creation': Date;
    'createur': Utilisateur | null;
    'application_utilisee_nom': string | null;
    'statut': StatutEnum;
    'modules': Array<ModulesEnum>;
    'tags': Array<Tag>;
    'est_archive': boolean;
    'enveloppe': Enveloppe | null;
    'workflows_actifs': Array<WorkflowsActifsEnum>;
    'nb_messages_fil_rouge': number;
    'nb_contacts': number;
    'nb_pieces_jointes': number;
};

export enum StatutEnum {
    OUVERT = 'OUVERT',
    CLOS = 'CLOS'
}

export enum ModulesEnum {
    ERP_ANALYSE_DE_RISQUE = 'erp:analyse_de_risque',
    ERP_ESSAIS_VISITE = 'erp:essais_visite',
    DECI_CONTROLE_TECHNIQUE_PEI = 'deci:controle_technique_pei'
}

export enum WorkflowsActifsEnum {
    ANALYSE_DE_RISQUE = 'analyse_de_risque',
    VALIDATION = 'validation',
    ARRIVEE_SIS = 'arrivee_sis',
    ARRIVEE_SIS_PREV = 'arrivee_sis_prev',
    ARRIVEE_SECRETARIAT_COMMISSION = 'arrivee_secretariat_commission',
    CONSULTATION_SIS = 'consultation_sis',
    PASSAGE_COMMISSION = 'passage_commission',
    RELECTURE = 'relecture',
    VISITE = 'visite',
    ARRIVEE_SECRETARIAT = 'arrivee_secretariat',
    WORKFLOW = 'workflow',
    RECEPTION_DE_TRAVAUX_EN_ATTENTE = 'reception_de_travaux_en_attente'
}
