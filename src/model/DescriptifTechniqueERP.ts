import { DescriptifTechniqueERPBase } from '../../src/model/DescriptifTechniqueERPBase';

export type DescriptifTechniqueERP = DescriptifTechniqueERPBase;

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
