// File generated from our OpenAPI spec
import { Clicdvcrem } from './Clicdvcrem';
import { DocumentTechnique } from './DocumentTechnique';

export type RapportEtude = {
    'analyse_risque': Clicdvcrem;
    'observations': string | null;
    'prise_de_note_interne': string | null;
    'proposition_avis': PropositionAvisEnum | null;
    'proposition_avis_observations': string;
    'facteur_dangerosite': number | null;
    'documents_techniques': Array<DocumentTechnique>;
};

export enum PropositionAvisEnum {
    FAVORABLE = 'favorable',
    DEFAVORABLE = 'defavorable'
}
