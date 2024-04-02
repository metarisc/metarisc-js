export type PrescriptionSupportReglementaire = {
    'id'?: string;
    'nature'?: NatureEnum;
    /**
    * Le CID est l’identifiant commun à l’ensemble des versions d’un objet Legifrance (article, section, texte). Si le CID est renseigné, alors ce support réglementaire est sourcé depuis Legifrance.
    */
    'legifrance_cid'?: string;
    'contenu'?: string;
    'titre'?: string;
    'etat'?: EtatEnum;
    'reference'?: string;
};

export enum NatureEnum {
    Arrete = 'arrete',
    Article = 'article',
    Local = 'local'
}

export enum EtatEnum {
    EnVigueur = 'en_vigueur'
}
