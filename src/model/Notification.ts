/**
* Une notification est un objet créé pour avertir ou informer un utilisateur pour un évévemenent spécifique.
*/
export type Notification = {
    'id'?: string;
    'title': string;
    'message': string;
    'contexte': any;
    'date_creation': Date;
    'date_de_lecture'?: Date;
    'utilisateur_id'?: string;
};
