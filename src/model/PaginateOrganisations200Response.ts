import { Organisation } from '../../src/model/Organisation';
import { PaginateOrganisations200ResponseMeta } from '../../src/model/PaginateOrganisations200ResponseMeta';

export type PaginateOrganisations200Response = {
    'data'?: Array<Organisation>;
    'meta'?: PaginateOrganisations200ResponseMeta;
};
