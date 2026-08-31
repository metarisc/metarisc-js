// File generated from our OpenAPI spec

export type PrescriptionSupportReglementaire = {
    'id': string;
    'nature': NatureEnum;
    'legifrance_cid': string | null;
    'contenu'?: string;
    'titre'?: string;
    'etat': EtatEnum;
    'reference': string;
};

export enum NatureEnum {
    ARTICLE = 'article',
    DECRET = 'decret',
    ARRETE = 'arrete',
    INSTRUCTIONS_TECHNIQUES = 'instructions_techniques',
    CIRCULAIRE = 'circulaire',
    AVIS_CCS = 'avis_ccs',
    GUIDES = 'guides',
    ARRETES_PREFECTORAUX = 'arretes_prefectoraux',
    ARRETES_MUNICIPAUX = 'arretes_municipaux',
    DOCTRINE = 'doctrine',
    CAHIERS_DES_CHARGES = 'cahiers_des_charges',
    ARTICLES = 'articles',
    LOCAL_AUTRE_TEXTE = 'local_autre_texte',
    TEXTES_NATIONAUX_AUTRE_TEXTE = 'textes_nationaux_autre_texte'
}

export enum EtatEnum {
    EN_VIGUEUR = 'en_vigueur',
    ABROGE = 'abroge'
}
