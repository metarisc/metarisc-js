// File generated from our OpenAPI spec

export type Permission = {
    'name': NameEnum;
};

export enum NameEnum {
    DECI_ACCESS = 'deci:access',
    ERP_ACCESS = 'erp:access',
    SIRENE_ACCESS = 'sirene:access',
    DOSSIER_CREATE = 'dossier:create',
    ERP_CREATE = 'erp:create',
    COMMISSION_ACCESS = 'commission:access'
}
