import { ERP } from '../../src/model/ERP';
import { PEI } from '../../src/model/PEI';
import { Utilisateur } from '../../src/model/Utilisateur';

export type Dossier = {
    'id'?: string;
    'type'?: TypeEnum;
    'description'?: string;
    'date_de_creation'?: Date;
    'createur'?: Utilisateur;
    'application_utilisee_nom'?: string;
    'statut'?: StatutEnum;
    'objet'?: string;
    'pei_id'?: string;
    'pei'?: PEI;
    'erp_id'?: string;
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
