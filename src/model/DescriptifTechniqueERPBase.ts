import { ActiviteErp } from '../../src/model/ActiviteErp';
import { Avis } from '../../src/model/Avis';

export type DescriptifTechniqueERPBase = {
    'id'?: string;
    'date'?: Date;
    'statut_erp'?: StatutErpEnum;
    'genre'?: GenreEnum;
    'avis_exploitation'?: Avis;
    'categorie'?: number;
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
    Etablissement = 'etablissement'
}
