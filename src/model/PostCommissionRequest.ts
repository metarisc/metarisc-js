export type PostCommissionRequest = {
    /**
    * Doit être un des Types acceptés d\'une commission (voir le champ type ici https://metarisc.fr/docs/api/#/schemas/Commission)
    */
    'type'?: string;
    'libelle'?: string;
};
