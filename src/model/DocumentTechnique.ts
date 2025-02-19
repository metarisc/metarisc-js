// File generated from our OpenAPI spec

export type DocumentTechnique = {
    'libelle': string;
    'reference': string | null;
    'type': TypeEnum;
    'date_de_reception': Date | null;
    'date_de_consultation': Date | null;
    'est_manquant': boolean | null;
};

export enum TypeEnum {
    NOTICE_DESCRIPTIVE = 'notice_descriptive',
    PLAN = 'plan',
    CERTIFICAT_DE_VERIFICATION = 'certificat_de_verification',
    RVRAT = 'RVRAT',
    RVRE = 'RVRE',
    RVRMD = 'RVRMD',
    DIVERS = 'divers'
}
