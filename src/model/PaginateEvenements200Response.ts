import { Evenement } from '../../src/model/Evenement';
import { PaginateEvenements200ResponseMeta } from '../../src/model/PaginateEvenements200ResponseMeta';

export type PaginateEvenements200Response = {
    'data'?: Array<Evenement>;
    'meta'?: PaginateEvenements200ResponseMeta;
};
