import { PrescriptionSupportReglementaire } from './PrescriptionSupportReglementaire';

export type Prescription = {
    'id'?: string;
    'contenu'?: string;
    'type'?: TypeEnum;
    'supports_reglementaires'?: Array<PrescriptionSupportReglementaire>;
};

export enum TypeEnum {
    LieeALExploitation = 'liee_a_l_exploitation',
    LieeALAmelioration = 'liee_a_l_amelioration',
    RappelReglementaire = 'rappel_reglementaire'
}
