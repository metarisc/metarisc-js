// File generated from our OpenAPI spec

export type PermissionDossier = {
    'name': NameEnum;
};

export enum NameEnum {
    DOSSIER_ACCESS = 'dossier:access',
    DOSSIER_INFO_ACCESS = 'dossier:info:access',
    DOSSIER_INFO_WRITE = 'dossier:info:write',
    DOSSIER_RAPPORTS_ACCESS = 'dossier:rapports:access',
    DOSSIER_RAPPORTS_WRITE = 'dossier:rapports:write',
    DOSSIER_ADMIN = 'dossier:admin'
}
