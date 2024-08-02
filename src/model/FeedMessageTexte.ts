import { FeedMessageBase } from './FeedMessageBase';

export type FeedMessageTexte = FeedMessageBase & { 

    'texte'?: string;
};

export enum TypeEnum {
    Texte = 'texte',
    ListePei = 'liste_pei'
}
