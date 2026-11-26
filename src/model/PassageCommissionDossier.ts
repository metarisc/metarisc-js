// File generated from our OpenAPI spec
import { Annexes } from './Annexes';
import { Dossier } from './Dossier';

export type PassageCommissionDossier = {
    'id': string;
    'dossier': Dossier;
    'avis': AvisEnum | null;
    'ge4_3': boolean | null;
    'date_de_passage': Date;
    'avis_differe': boolean | null;
    'na_pu_se_prononcer': boolean | null;
    'observations': string | null;
    'duree_minutes': number;
    'periodicite_proposee'?: string | null;
    'periodicite_accordee'?: boolean | null;
    'annexes'?: Array<Annexes> | null;
    'inclure_annexes_dans_le_proces_verbal'?: boolean | null;
    'numero_proces_verbal'?: string | null;
};

export enum AvisEnum {
    FAVORABLE = 'favorable',
    DEFAVORABLE = 'defavorable'
}
