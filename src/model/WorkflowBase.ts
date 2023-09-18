export type WorkflowBase = {
    'id'?: string;
    'titre'?: string;
    'dateDeCreation'?: Date;
    'dateDeFin'?: Date;
    'workflowAutomatise'?: boolean;
    'etat'?: string;
    'groupeDeTravail'?: string;
    'observations'?: string;
    'estComplet'?: boolean;
    'listePoi'?: string;
    'documents'?: string;
};
