// File generated from our OpenAPI spec
import { Commission } from './Commission';

export type CommissionMembre = {
    'id': string;
    'titre': TitreEnum;
    'presence_obligatoire': boolean;
    'commission': Commission;
};

export enum TitreEnum {
    POLICE = 'POLICE',
    GENDARMERIE = 'GENDARMERIE',
    MAIRE = 'MAIRE',
    SIS = 'SIS',
    DDT_DDTM = 'DDT/DDTM',
    DISP = 'DISP',
    PREFECTURE = 'PREFECTURE',
    SOUS_PREFECTURE = 'SOUS_PREFECTURE',
    AGENT_DE_L_ETABLISSSEMENT_PUBLIC_DE_COOPERATION_INTERCOMMUNALE = 'AGENT_DE_L_ETABLISSSEMENT_PUBLIC_DE_COOPERATION_INTERCOMMUNALE',
    AGENT_DE_LA_COMMUNE = 'AGENT_DE_LA_COMMUNE',
    IGSI = 'IGSI'
}
