// File generated from our OpenAPI spec
import { PassageCommission } from './PassageCommission';

export type CommissionPassageMembre = {
    'id': string;
    'titre'?: string | null;
    'nom'?: string | null;
    'prenom'?: string | null;
    'presence_obligatoire'?: boolean | null;
    'passage_en_commission': PassageCommission;
};
