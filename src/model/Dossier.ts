import { Type } from '../../src/model/Type';


/**
* Un dossier représente la vie d\'un POI
*/
export type Dossier = {
    'id'?: string;
    'type'?: Type;
    'description'?: string;
    'programmation'?: string;
    'dateDeCreation'?: Date;
    'createur'?: string;
    'applicationUtilisee'?: string;
    'statut'?: string;
};

