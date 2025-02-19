// File generated from our OpenAPI spec

import { FeedMessageBase } from './FeedMessageBase';

export type FeedMessageTexte = FeedMessageBase & { 

    'texte': string;
};

export enum TypeEnum {
    TEXTE = 'texte',
    LISTE_PEI = 'liste_pei'
}
