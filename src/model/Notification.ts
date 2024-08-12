import { Utilisateur } from './Utilisateur';

export type Notification = {
    'id'?: string;
    'title'?: string;
    'message'?: string;
    'type'?: TypeEnum;
    'contexte'?: { [key: string]: string; };
    'date_creation'?: Date;
    'date_de_lecture'?: Date;
    'utilisateur'?: Utilisateur;
};

export enum TypeEnum {
    Info = 'info'
}
