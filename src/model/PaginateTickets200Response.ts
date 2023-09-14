import { PaginateTickets200ResponseMeta } from '../../src/model/PaginateTickets200ResponseMeta';
import { Ticket } from '../../src/model/Ticket';

export type PaginateTickets200Response = {
    'data'?: Array<Ticket>;
    'meta'?: PaginateTickets200ResponseMeta;
};
