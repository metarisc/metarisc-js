// File generated from our OpenAPI spec

export type Utilisateur = {
    'id': string;
    'first_name': string | null;
    'last_name': string | null;
    'created_at': Date;
    'updated_at': Date | null;
    'timezone': string;
    'is_active': boolean;
    'is_verified': boolean;
    'fonction': string | null;
    'avatar_url': string | null;
};
