import { Utilisateur } from './Utilisateur';

export type DossierBase = {
    'id'?: string;
    'objet'?: string;
    'date_de_creation'?: Date;
    'createur'?: Utilisateur;
    'application_utilisee_nom'?: string;
    'statut'?: StatutEnum;
};

export enum StatutEnum {
    Ouvert = 'OUVERT',
    Clos = 'CLOS'
}
