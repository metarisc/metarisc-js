export type DescriptifTechniqueDECIBase = {
    'id'?: string;
    'type'?: TypeEnum;
    'est_reglementaire'?: boolean;
    'domanialite'?: DomanialiteEnum;
    'est_conforme_rddeci'?: boolean;
    'performance_theorique'?: number;
    'performance_reelle'?: number;
    'observations_generales'?: string;
    'date'?: Date;
    'statut'?: StatutEnum;
    'est_disponible'?: boolean;
};

export enum TypeEnum {
    Pibi = 'PIBI',
    Pena = 'PENA'
}

export enum DomanialiteEnum {
    Privee = 'privee',
    Publique = 'publique',
    PriveeConventionnee = 'privee_conventionnee'
}

export enum StatutEnum {
    RepriseDeDonnees = 'reprise_de_donnees',
    DeclarationEnCours = 'declaration_en_cours',
    ReconnaissanceOperationnelleInitiale = 'reconnaissance_operationnelle_initiale',
    Actif = 'actif',
    Projet = 'projet',
    Reforme = 'reforme'
}
