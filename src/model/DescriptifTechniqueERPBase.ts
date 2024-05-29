import { ActiviteErp } from '../../src/model/ActiviteErp';
import { Avis } from '../../src/model/Avis';

export type DescriptifTechniqueERPBase = {
    'id'?: string;
    'date'?: Date;
    'statut_erp'?: StatutErpEnum;
    'genre'?: GenreEnum;
    'avis_exploitation'?: Avis;
    'categorie'?: CategorieEnum;
    'type_activite'?: ActiviteErp;
    'types_activites_secondaires'?: Array<ActiviteErp>;
    'periodicite'?: number;
    'libelle'?: string;
    'presence_locaux_sommeil'?: boolean;
    'observations_generales'?: string;
};

export enum StatutErpEnum {
    RepriseDeDonnees = 'reprise_de_donnees',
    Ouvert = 'ouvert',
    Projet = 'projet',
    Ferme = 'ferme'
}

export enum GenreEnum {
    Etablissement = 'etablissement',
    Site = 'site',
    Cellule = 'cellule'
}

export enum CategorieEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5
}
