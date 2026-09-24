// File generated from our OpenAPI spec

export type MainCouranteCourriel = {
    'nature': NatureEnum;
    'demandeur'?: string | null;
    'date_reception_mairie'?: Date | null;
    'date_envoi_transit'?: Date | null;
    'date_reception_sdis'?: Date | null;
    'observations'?: string | null;
    'date_reponse'?: Date | null;
    'date_transfert_commission_competente'?: Date | null;
    'date_reception_commission_competente'?: Date | null;
};

export enum NatureEnum {
    LETTRE = 'LETTRE',
    MISE_EN_DEMEURE = 'MISE_EN_DEMEURE',
    AVIS_ECRIT_MOTIVE = 'AVIS_ECRIT_MOTIVE',
    CONSULTATION_PLU = 'CONSULTATION_PLU',
    RAPPORT_ORGANISME_AGREE = 'RAPPORT_ORGANISME_AGREE',
    DEMANDE_RENSEIGNEMENT = 'DEMANDE_RENSEIGNEMENT',
    DEMANDE_VISITE_PERIODIQUE = 'DEMANDE_VISITE_PERIODIQUE',
    DEMANDE_VISITE_TECHNIQUE = 'DEMANDE_VISITE_TECHNIQUE',
    DEMANDE_VISITE_INOPINEE = 'DEMANDE_VISITE_INOPINEE',
    DEMANDE_VISITE_HORS_PROGRAMME = 'DEMANDE_VISITE_HORS_PROGRAMME',
    DEMANDE_VISITE_RECEPTION = 'DEMANDE_VISITE_RECEPTION',
    AUTORISATION_TRAVAUX = 'AUTORISATION_TRAVAUX'
}
