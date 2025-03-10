// File generated from our OpenAPI spec

export type Workflow = {
    'id': string;
    'titre': string;
    'date_de_creation': Date;
    'date_de_debut': Date | null;
    'date_de_fin': Date | null;
    'workflow_automatise': boolean;
    'etat': EtatEnum;
    'observations': string | null;
    'type': TypeEnum;
};

export enum EtatEnum {
    VALIDE = 'VALIDE',
    EN_COURS = 'EN_COURS',
    ATTENTE = 'ATTENTE',
    PAUSE = 'PAUSE',
    NON_CONCERNE = 'NON_CONCERNE'
}

export enum TypeEnum {
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
