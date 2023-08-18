import { PaginateDossiers200ResponseMeta } from '../../src/model/PaginateDossiers200ResponseMeta';
import { Tag } from '../../src/model/Tag';

export type PaginateTags200Response = {
    'data'?: Array<Tag>;
    'meta'?: PaginateDossiers200ResponseMeta;
};
