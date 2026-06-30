// File generated from our OpenAPI spec
import { DocumentTechnique } from './DocumentTechnique';
import { Essai } from './Essai';
import { TexteApplicable } from './TexteApplicable';

export type RapportVisite = {
    'observations': string | null;
    'prise_de_note_interne': string | null;
    'proposition_avis': PropositionAvisEnum | null;
    'proposition_avis_observations': string;
    'facteur_dangerosite': number | null;
    'documents_techniques': Array<DocumentTechnique>;
    'essais': Array<Essai>;
    'descriptif_dossier': string | null;
    'textes_applicables': Array<TexteApplicable>;
};

export enum PropositionAvisEnum {
    FAVORABLE = 'favorable',
    DEFAVORABLE = 'defavorable'
}
