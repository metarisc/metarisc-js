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
    DISP = 'DISP'
}
