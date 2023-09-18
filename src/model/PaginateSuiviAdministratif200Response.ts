import { PaginateDossiers200ResponseMeta } from '../../src/model/PaginateDossiers200ResponseMeta';
import { SuiviAdministratif } from '../../src/model/SuiviAdministratif';

export type PaginateSuiviAdministratif200Response = {
    'data'?: Array<SuiviAdministratif>;
    'meta'?: PaginateDossiers200ResponseMeta;
};
