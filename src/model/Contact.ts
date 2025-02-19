// File generated from our OpenAPI spec

export type Contact = {
    'id': string;
    'nom': string | null;
    'prenom': string | null;
    'fonction': string | null;
    'telephone_fixe': string | null;
    'telephone_portable': string | null;
    'telephone_fax': string | null;
    'adresse': string | null;
    'site_web_url': string | null;
    'civilite': CiviliteEnum | null;
    'societe': string | null;
    'email': string | null;
    'observations': string | null;
};

export enum CiviliteEnum {
    M = 'M',
    MME = 'Mme',
    MX = 'Mx'
}
