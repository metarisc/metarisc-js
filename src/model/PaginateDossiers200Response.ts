import { Dossier } from '../../src/model/Dossier';
import { PaginateDossiers200ResponseMeta } from '../../src/model/PaginateDossiers200ResponseMeta';


export type PaginateDossiers200Response = {
    'data'?: Array<Dossier>;
    'meta'?: PaginateDossiers200ResponseMeta;
};

