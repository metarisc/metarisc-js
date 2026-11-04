// File generated from our OpenAPI spec
import { CommissionPassageMembre } from './CommissionPassageMembre';

export type MembreAvis = {
    'id': string;
    'commission_passage_membre'?: CommissionPassageMembre | null;
    'avis': AvisEnum;
    'motivation_avis'?: string | null;
};

export enum AvisEnum {
    FAVORABLE = 'favorable',
    DEFAVORABLE = 'defavorable'
}
