import { FeedMessageBase } from '../model/FeedMessageBase';

export type FeedMessageTexte = FeedMessageBase & { 
    'texte'?: string;
};
