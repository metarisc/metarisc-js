import { AnomaliePEI } from '../../src/model/AnomaliePEI';

export type DescriptifTechniqueDECIBase = {
    'id'?: string;
    'type'?: TypeEnum;
    'anomalies'?: Array<AnomaliePEI>;
    'est_reglementaire'?: boolean;
    'domanialite'?: DomanialiteEnum;
    'est_conforme_rddeci'?: boolean;
    /**
    * - Performance nulle = 0 - Performance restreinte = 1 - Performance bonne = 2 - Performance inconnue = -1
    */
    'performance_theorique'?: number;
    /**
    * - Performance nulle = 0 - Performance restreinte = 1 - Performance bonne = 2 - Performance inconnue = -1
    */
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
