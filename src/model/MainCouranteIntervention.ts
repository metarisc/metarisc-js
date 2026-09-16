// File generated from our OpenAPI spec

export type MainCouranteIntervention = {
    'nature': NatureEnum;
    'InterventionSDIS'?: boolean | null;
    'RCCI'?: boolean | null;
    'RetEx'?: boolean | null;
    'numero_intervention'?: string | null;
    'date_heure_intervention'?: Date | null;
    'date_heure_fin_intervention'?: Date | null;
    'duree_intervention'?: string | null;
    'observations'?: string | null;
};

export enum NatureEnum {
    INCENDIE = 'INCENDIE',
    SAP = 'SAP',
    INTERVENTION_DIVERSE = 'INTERVENTION_DIVERSE'
}
