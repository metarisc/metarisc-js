import { POI } from '../../src/model/POI';
import { PaginatePoi200ResponseMeta } from '../../src/model/PaginatePoi200ResponseMeta';


export type PaginatePoi200Response = {
    'data'?: Array<POI>;
    'meta'?: PaginatePoi200ResponseMeta;
};

