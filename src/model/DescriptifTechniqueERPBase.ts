import { ActiviteErp } from './ActiviteErp';

export type DescriptifTechniqueERPBase = {
    'id'?: string;
    'date'?: Date;
    'statut'?: StatutEnum;
    'categorie'?: CategorieEnum;
    'r143_20'?: boolean;
    'type_activite'?: ActiviteErp;
    'types_activites_secondaires'?: Array<ActiviteErp>;
    'periodicite'?: number;
    'libelle'?: string;
    'presence_locaux_sommeil'?: boolean;
    'observations_generales'?: string;
};

export enum StatutEnum {
    RepriseDeDonnees = 'reprise_de_donnees',
    Ouvert = 'ouvert',
    Projet = 'projet',
    Ferme = 'ferme'
}

export enum CategorieEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5
}
