// File generated from our OpenAPI spec
import { ERP } from './ERP';

export type ERPLie = {
    'erp_lie': ERP;
    'type': TypeEnum;
};

export enum TypeEnum {
    CELLULE = 'CELLULE',
    BATIMENT_NON_ISOLE = 'BATIMENT_NON_ISOLE'
}
