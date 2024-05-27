/**
* Un objet commun Error (RFC 7807). 
*/
export type ModelError = {
    /**
    * Une référence Uri qui identifie le type de problème
    */
    'type'?: string;
    /**
    * Un résumé du type d\'erreur rencontré
    */
    'title'?: string;
    /**
    * Le code de réponse HTTP généré par l\'API Metarisc
    */
    'status'?: number;
    /**
    * La description complète de l\'erreur rencontrée
    */
    'detail'?: string;
};
