import { PEI } from './PEI';

import { DossierBase } from './DossierBase';

export type DossierDeci = DossierBase & { 

    'type'?: TypeEnum;

    'pei'?: PEI;
};

export enum StatutEnum {
    Ouvert = 'OUVERT',
    Clos = 'CLOS'
}

export enum TypeEnum {
    DecideclarationPei = 'deci:declaration_pei'
}
