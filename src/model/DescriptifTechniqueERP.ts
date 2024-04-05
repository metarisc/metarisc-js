import { DescriptifTechniqueERPBase } from '../../src/model/DescriptifTechniqueERPBase';

export type DescriptifTechniqueERP = DescriptifTechniqueERPBase;

export enum StatutErpEnum {
    RepriseDeDonnees = 'reprise_de_donnees',
    Ouvert = 'ouvert',
    Projet = 'projet',
    Ferme = 'ferme'
}

export enum GenreEnum {
    Etablissement = 'etablissement'
}
