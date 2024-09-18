import { DossierDeci } from './DossierDeci';
import { DossierErp } from './DossierErp';

export type Dossier = DossierErp | DossierDeci;

export enum StatutEnum {
    Ouvert = 'OUVERT',
    Clos = 'CLOS'
}

export enum TypeEnum {
    ErpautorisationDeTravaux = 'erp:autorisation_de_travaux',
    ErpvisitePeriodique = 'erp:visite_periodique',
    DecideclarationPei = 'deci:declaration_pei'
}
