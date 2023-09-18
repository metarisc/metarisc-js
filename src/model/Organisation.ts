export type Organisation = {
    'id'?: string;
    'nom'?: string;
    'logoUrl'?: string;
    'type'?: TypeEnum;
};

export enum TypeEnum {
    Sis = 'sis'
}
