export type PostMessageRequest = {
    'type'?: TypeEnum;
    'titre'?: string;
    'texte'?: string;
};

export enum TypeEnum {
    Texte = 'texte'
}
