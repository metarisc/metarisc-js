// File generated from our OpenAPI spec
import { Utilisateur } from './Utilisateur';

import { FeedMessageBase } from './FeedMessageBase';

export type FeedMessageMessageUtilisateur = FeedMessageBase & { 

    'texte': string;

    'redacteur': Utilisateur;
};

export enum TypeEnum {
    TEXTE = 'texte',
    LISTE_PEI = 'liste_pei',
    MESSAGE_UTILISATEUR = 'message_utilisateur'
}
