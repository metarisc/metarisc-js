import { FeatureGeometry } from '../../src/model/FeatureGeometry';

export type Feature = {
    'type'?: string;
    'properties'?: any;
    'geometry'?: FeatureGeometry;
};
