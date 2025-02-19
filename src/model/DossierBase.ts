// File generated from our OpenAPI spec
import { Enveloppe } from './Enveloppe';
import { Tag } from './Tag';
import { Utilisateur } from './Utilisateur';

export type DossierBase = {
    'id': string;
    'objet': string;
    'date_de_creation': Date;
    'createur': Utilisateur | null;
    'application_utilisee_nom': string | null;
    'statut': StatutEnum;
    'modules': ModulesEnum;
    'tags': Array<Tag>;
    'est_archive': boolean;
    'enveloppe': Enveloppe | null;
};

export enum StatutEnum {
    OUVERT = 'OUVERT',
    CLOS = 'CLOS'
}

export enum ModulesEnum {
    ERP_ANALYSE_DE_RISQUE = 'erp:analyse_de_risque',
    DECI_CONTROLE_TECHNIQUE_PEI = 'deci:controle_technique_pei'
}
