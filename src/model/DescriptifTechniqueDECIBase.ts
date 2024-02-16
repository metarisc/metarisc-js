import { AnomalieDECI } from '../../src/model/AnomalieDECI';

import { DescriptifTechniqueBase } from '../model/DescriptifTechniqueBase';

export type DescriptifTechniqueDECIBase = DescriptifTechniqueBase & { 
    'anomalies'?: Array<AnomalieDECI>;
    'est_reglementaire'?: boolean;
    'est_reforme'?: boolean;
    'domanialite'?: DomanialiteEnum;
    'est_conforme'?: boolean;
    'performance_theorique'?: number;
    'performance_reelle'?: number;
};

export enum DomanialiteEnum {
    Privee = 'privee',
    Publique = 'publique',
    PriveeConventionnee = 'privee_conventionnee'
}
