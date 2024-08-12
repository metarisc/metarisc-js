import { ERP } from './ERP';
import { PEI } from './PEI';
import { Utilisateur } from './Utilisateur';

export type Dossier = {
    'id'?: string;
    'type'?: TypeEnum;
    'objet'?: string;
    'date_de_creation'?: Date;
    'createur'?: Utilisateur;
    'application_utilisee_nom'?: string;
    'statut'?: StatutEnum;
    'pei'?: PEI;
    'erp'?: ERP;
};

export enum TypeEnum {
    DecideclarationPei = 'deci:declaration_pei',
    ErpautorisationDeTravaux = 'erp:autorisation_de_travaux',
    ErpvisitePeriodique = 'erp:visite_periodique'
}

export enum StatutEnum {
    Ouvert = 'OUVERT',
    Clos = 'CLOS'
}
