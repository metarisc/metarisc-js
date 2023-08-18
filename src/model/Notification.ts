/**
* Une notification est un objet créé pour avertir ou informer un utilisateur pour un évévemenent spécifique.
*/
export type Notification = {
    'id'?: string;
    'title': string;
    'message': string;
    'contexte': any;
    'dateCreation': string;
    'dateDeLecture'?: string;
    'utilisateurId'?: string;
};
