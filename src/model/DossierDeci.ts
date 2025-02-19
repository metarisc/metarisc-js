// File generated from our OpenAPI spec
import { PEI } from './PEI';

import { DossierBase } from './DossierBase';

export type DossierDeci = DossierBase & { 

    'type': TypeEnum;

    'pei': PEI;
};

export enum StatutEnum {
    OUVERT = 'OUVERT',
    CLOS = 'CLOS'
}

export enum ModulesEnum {
    ERP_ANALYSE_DE_RISQUE = 'erp:analyse_de_risque',
    DECI_CONTROLE_TECHNIQUE_PEI = 'deci:controle_technique_pei'
}

export enum TypeEnum {
    DECI_DECLARATION_PEI = 'deci:declaration_pei'
}
