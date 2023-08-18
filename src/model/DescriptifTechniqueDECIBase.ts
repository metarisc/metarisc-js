import { AnomalieDECI } from '../../src/model/AnomalieDECI';

import { DescriptifTechniqueBase } from '../model/DescriptifTechniqueBase';

export type DescriptifTechniqueDECIBase = DescriptifTechniqueBase & { 
    'anomalies'?: Array<AnomalieDECI>;
    'estReglementaire'?: boolean;
    'estReforme'?: boolean;
    'domanialite'?: DomanialiteEnum;
    'estConforme'?: boolean;
    'performanceTheorique'?: number;
    'performanceReelle'?: number;
};

export enum DomanialiteEnum {
    Privee = 'privee',
    Publique = 'publique',
    PriveeConventionnee = 'privee_conventionnee'
}
