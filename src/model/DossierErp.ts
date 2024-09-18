import { ERP } from './ERP';

import { DossierBase } from './DossierBase';

export type DossierErp = DossierBase & { 

    'type'?: TypeEnum;

    'erp'?: ERP;
};

export enum StatutEnum {
    Ouvert = 'OUVERT',
    Clos = 'CLOS'
}

export enum TypeEnum {
    AutorisationDeTravaux = 'erp:autorisation_de_travaux',
    VisitePeriodique = 'erp:visite_periodique'
}
