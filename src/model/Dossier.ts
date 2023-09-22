import { Type } from '../../src/model/Type';

/**
* Un dossier représente la vie d\'un POI
*/
export type Dossier = {
    'id'?: string;
    'type'?: Type;
    'description'?: string;
    'date_de_creation'?: Date;
    'createur'?: string;
    'application_utilisee'?: string;
    'statut'?: string;
};
