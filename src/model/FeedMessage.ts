// File generated from our OpenAPI spec
import { FeedMessageMessageUtilisateur } from './FeedMessageMessageUtilisateur';
import { FeedMessageTexte } from './FeedMessageTexte';

export type FeedMessage = FeedMessageTexte | FeedMessageMessageUtilisateur;

export enum TypeEnum {
    TEXTE = 'texte',
    LISTE_PEI = 'liste_pei',
    MESSAGE_UTILISATEUR = 'message_utilisateur'
}
