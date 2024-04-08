export type UpdateDossierWorkflowsDetailsRequest = {
    'est_valide'?: boolean;
    'passage_commission_id'?: string;
    'avis_favorable'?: boolean;
    'commission_id'?: string;
    'date_arrivee_secretariat'?: Date;
    'analyse_de_risque'?: string;
    'avis_rapporteur'?: boolean;
    'descriptif_effectifs'?: string;
    'facteur_dangerosite'?: number;
    'derogations'?: string;
    'prescriptions'?: Array<string>;
    'mesures_compensatoires'?: string;
    'mesures_complementaires'?: string;
    'observations'?: string;
    'termine'?: boolean;
};
