export type Contact = {
    'id'?: string;
    'nom'?: string;
    'prenom'?: string;
    'fonction'?: string;
    'telephone_fixe'?: string;
    'telephone_portable'?: string;
    'telephone_fax'?: string;
    'adresse'?: string;
    'site_web_url'?: string;
    'civilite'?: CiviliteEnum;
    'societe'?: string;
    'email'?: string;
    'observations'?: string;
};

export enum CiviliteEnum {
    M = 'M',
    Mme = 'Mme',
    Mx = 'Mx'
}
