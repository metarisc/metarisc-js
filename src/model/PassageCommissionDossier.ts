// File generated from our OpenAPI spec
import { Dossier } from './Dossier';

export type PassageCommissionDossier = {
    'id': string;
    'dossier': Dossier;
    'avis': AvisEnum | null;
    'date_de_passage': Date;
    'avis_differe': boolean | null;
    'observations': string | null;
};

export enum AvisEnum {
    FAVORABLE = 'favorable',
    DEFAVORABLE = 'defavorable'
}
