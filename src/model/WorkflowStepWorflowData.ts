// File generated from our OpenAPI spec

export type WorkflowStepWorflowData = {
    'titre': string;
    'type': TypeEnum;
};

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
