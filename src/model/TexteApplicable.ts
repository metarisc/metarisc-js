// File generated from our OpenAPI spec

export type TexteApplicable = {
    'texte': string;
    'type': TypeEnum;
};

export enum TypeEnum {
    DISPOSITIONS_GENERALES = 'Dispositions générales',
    DISPOSITIONS_PARTICULIERES = 'Dispositions particulières',
    DISPOSITIONS_SPECIALES = 'Dispositions spéciales',
    TEXTES_RELATIFS_AUX_BATIMENTS_DHABITATION = 'Textes relatifs aux bâtiments d\'habitation',
    ERP = 'ERP',
    ERP_DU_2EME_GROUPE = 'ERP du 2ème groupe',
    INSTRUCTIONS_TECHNIQUES_ERP = 'Instructions techniques ERP',
    IGH___IMH = 'IGH / IMH',
    HABITATION = 'Habitation',
    RUBRIQUES_ICPE = 'Rubriques ICPE',
    ETABLISSEMENTS_PENITENTIAIRES = 'Etablissements pénitentiaires',
    PYROTECHNIE = 'Pyrotechnie',
    GUIDES = 'Guides',
    ARRETES_PREFECTORAUX = 'Arrêtés préfectoraux'
}
