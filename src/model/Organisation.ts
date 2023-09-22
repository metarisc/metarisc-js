export type Organisation = {
    'id'?: string;
    'nom'?: string;
    'logo_url'?: string;
    'type'?: TypeEnum;
};

export enum TypeEnum {
    Sis = 'sis'
}
