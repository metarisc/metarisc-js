export type PieceJointe = {
    'id'?: string;
    'url'?: string;
    'nom'?: string;
    'description'?: string;
    'type'?: TypeEnum;
    'est_sensible'?: boolean;
};

export enum TypeEnum {
    Photo = 'photo',
    Plan = 'plan',
    Annexe = 'annexe',
    Divers = 'divers'
}
