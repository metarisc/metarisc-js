// File generated from our OpenAPI spec
import { DossierBase } from './DossierBase';

export type DossierBaseRattachement = {
    'id': string;
    'type': TypeEnum;
    'dossier_enfant': DossierBase;
};

export enum TypeEnum {
    SOUS_DOSSIER = 'SOUS_DOSSIER'
}
