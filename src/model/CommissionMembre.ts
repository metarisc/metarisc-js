import { Commission } from './Commission';

export type CommissionMembre = {
    'id'?: string;
    'titre'?: TitreEnum;
    'presence_obligatoire'?: boolean;
    'commission'?: Commission;
};

export enum TitreEnum {
    Police = 'POLICE',
    Gendarmerie = 'GENDARMERIE',
    Maire = 'MAIRE',
    Sis = 'SIS',
    DdtDdtm = 'DDT/DDTM',
    Region = 'REGION'
}
