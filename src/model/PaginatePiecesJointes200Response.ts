import { PaginatePoi200ResponseMeta } from '../../src/model/PaginatePoi200ResponseMeta';
import { PieceJointe } from '../../src/model/PieceJointe';

export type PaginatePiecesJointes200Response = {
    'data'?: Array<PieceJointe>;
    'meta'?: PaginatePoi200ResponseMeta;
};
