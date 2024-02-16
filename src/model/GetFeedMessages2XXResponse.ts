import { FeedMessage } from '../../src/model/FeedMessage';
import { PaginatePei200ResponseMeta } from '../../src/model/PaginatePei200ResponseMeta';

export type GetFeedMessages2XXResponse = {
    'data'?: Array<FeedMessage>;
    'meta'?: PaginatePei200ResponseMeta;
};
