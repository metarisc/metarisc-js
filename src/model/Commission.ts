export type Commission = {
    'id'?: string;
    'type'?: TypeEnum;
    'libelle'?: string;
};

export enum TypeEnum {
    SousCommissionDpartementale = 'Sous-commission départementale',
    CommissionCommunale = 'Commission communale',
    CommissionIntercommunale = 'Commission intercommunale',
    CommissionDarrondissement = 'Commission d\'arrondissement',
    CoDerst = 'CoDERST'
}
