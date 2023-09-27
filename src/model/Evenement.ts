export type Evenement = {
    'id'?: string;
    'title'?: string;
    'type'?: TypeEnum;
    'description'?: string;
    'date_debut'?: Date;
    'date_fin'?: Date;
};

export enum TypeEnum {
    Defaut = 'DEFAUT',
    ReconnaissanceOperationnelleAnnuelle = 'RECONNAISSANCE_OPERATIONNELLE_ANNUELLE',
    VisitePeriodique = 'VISITE_PERIODIQUE',
    CommissionSecurite = 'COMMISSION_SECURITE'
}
