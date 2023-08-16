import { Email } from '../../src/model/Email';
import { PaginateMoiEmails200ResponseMeta } from '../../src/model/PaginateMoiEmails200ResponseMeta';


export type PaginateMoiEmails200Response = {
    'data'?: Array<Email>;
    'meta'?: PaginateMoiEmails200ResponseMeta;
};

