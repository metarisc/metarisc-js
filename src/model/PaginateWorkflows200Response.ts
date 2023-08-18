import { PaginateDossiers200ResponseMeta } from '../../src/model/PaginateDossiers200ResponseMeta';
import { Workflow } from '../../src/model/Workflow';

export type PaginateWorkflows200Response = {
    'data'?: Array<Workflow>;
    'meta'?: PaginateDossiers200ResponseMeta;
};
