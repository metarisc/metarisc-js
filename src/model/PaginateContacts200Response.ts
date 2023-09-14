import { Contact } from '../../src/model/Contact';
import { PaginatePoi200ResponseMeta } from '../../src/model/PaginatePoi200ResponseMeta';

export type PaginateContacts200Response = {
    'data'?: Array<Contact>;
    'meta'?: PaginatePoi200ResponseMeta;
};
