import { Organisation } from './Organisation';

export type Commission = {
    'id'?: string;
    'type'?: TypeEnum;
    'libelle'?: string;
    'presidence'?: Organisation;
};

export enum TypeEnum {
    SousCommissionDpartementale = 'Sous-commission départementale',
    CommissionCommunale = 'Commission communale',
    CommissionIntercommunale = 'Commission intercommunale',
    CommissionDarrondissement = 'Commission d\'arrondissement',
    CoDerst = 'CoDERST'
}
