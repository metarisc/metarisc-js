// File generated from our OpenAPI spec
import { Clicdvcrem } from './Clicdvcrem';

export type DescriptifTechniqueERPBase = {
    'id': string;
    'date': Date;
    'statut': StatutEnum;
    'periodicite': number | null;
    'libelle': string;
    'observations_generales': string | null;
    'analyse_risque': Clicdvcrem;
};

export enum StatutEnum {
    REPRISE_DE_DONNEES = 'reprise_de_donnees',
    OUVERT = 'ouvert',
    PROJET = 'projet',
    FERME = 'ferme'
}
