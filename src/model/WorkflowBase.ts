export type WorkflowBase = {
    'id'?: string;
    'titre'?: string;
    'date_de_creation'?: Date;
    'date_de_debut'?: Date;
    'date_de_fin'?: Date;
    'workflow_automatise'?: boolean;
    'termine'?: boolean;
    'etat'?: EtatEnum;
    'observations'?: string;
    'type'?: string;
};

export enum EtatEnum {
    Valide = 'VALIDE',
    EnCours = 'EN_COURS',
    Attente = 'ATTENTE'
}
