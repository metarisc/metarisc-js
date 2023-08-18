import { DescriptifTechnique } from '../../src/model/DescriptifTechnique';
import { PaginatePoi200ResponseMeta } from '../../src/model/PaginatePoi200ResponseMeta';

export type PaginateHistorique200Response = {
    'data'?: Array<DescriptifTechnique>;
    'meta'?: PaginatePoi200ResponseMeta;
};
