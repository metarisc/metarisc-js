import { Notification } from '../../src/model/Notification';
import { PaginateMoiEmails200ResponseMeta } from '../../src/model/PaginateMoiEmails200ResponseMeta';

export type PaginateNotifications200Response = {
    'data'?: Array<Notification>;
    'meta'?: PaginateMoiEmails200ResponseMeta;
};
