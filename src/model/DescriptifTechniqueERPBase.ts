import { Clicdvcrem } from './Clicdvcrem';

export type DescriptifTechniqueERPBase = {
    'id'?: string;
    'date'?: Date;
    'statut'?: StatutEnum;
    'periodicite'?: number;
    'libelle'?: string;
    'observations_generales'?: string;
    'analyse_risque'?: Clicdvcrem;
};

export enum StatutEnum {
    RepriseDeDonnees = 'reprise_de_donnees',
    Ouvert = 'ouvert',
    Projet = 'projet',
    Ferme = 'ferme'
}
