export type WorkflowBase = {
    'id'?: string;
    'titre'?: string;
    'date_de_creation'?: Date;
    'date_de_fin'?: Date;
    'workflow_automatise'?: boolean;
    'etat'?: string;
    'groupe_de_travail'?: string;
    'observations'?: string;
    'est_complet'?: boolean;
    'liste_poi'?: string;
    'documents'?: string;
};
