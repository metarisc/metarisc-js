import { Feature } from '../../src/model/Feature';
import { GetFeature200ResponseCrs } from '../../src/model/GetFeature200ResponseCrs';


export type GetFeature200Response = {
    'type'?: string;
    'crs'?: GetFeature200ResponseCrs;
    'features'?: Array<Feature>;
};

