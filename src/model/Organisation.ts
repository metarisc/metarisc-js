// File generated from our OpenAPI spec

export type Organisation = {
    'id': string;
    'nom': string;
    'logo_url': string | null;
    'type': TypeEnum;
    'format_documents': FormatDocumentsEnum;
};

export enum TypeEnum {
    SIS = 'sis'
}

export enum FormatDocumentsEnum {
    ODT = 'odt',
    PDF = 'pdf'
}
