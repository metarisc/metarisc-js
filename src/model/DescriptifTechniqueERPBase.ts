import { ActiviteErp } from '../../src/model/ActiviteErp';
import { Avis } from '../../src/model/Avis';

export type DescriptifTechniqueERPBase = {
    'id'?: string;
    'date'?: Date;
    'statut_erp'?: StatutErpEnum;
    'genre'?: GenreEnum;
    'avis_exploitation'?: Avis;
    'categorie'?: number;
    'types_activites'?: Array<ActiviteErp>;
    'periodicite'?: number;
    'libelle'?: string;
    'effectifs'?: string;
    'presence_locaux_sommeil'?: boolean;
    'descriptif_general'?: string;
    'descriptif_technique'?: string;
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
