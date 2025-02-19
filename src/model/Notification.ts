// File generated from our OpenAPI spec
import { Utilisateur } from './Utilisateur';

export type Notification = {
    'id': string;
    'title': string;
    'message': string;
    'type': TypeEnum;
    'contexte': { [key: string]: string; };
    'date_creation': Date;
    'date_de_lecture': Date | null;
    'utilisateur': Utilisateur;
};

export enum TypeEnum {
    INFO = 'info'
}
