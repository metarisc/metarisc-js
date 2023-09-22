import { Document } from '../../src/model/Document';
import { PaginateDossiers200ResponseMeta } from '../../src/model/PaginateDossiers200ResponseMeta';

export type PaginateWorkflowDocuments200Response = {
    'data'?: Array<Document>;
    'meta'?: PaginateDossiers200ResponseMeta;
};
