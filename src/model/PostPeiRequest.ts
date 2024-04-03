import { AdressePostale } from '../../src/model/AdressePostale';

export type PostPeiRequest = {
    'implantation'?: AdressePostale;
    'numero'?: string;
    'numero_compteur'?: string;
    'numero_serie_appareil'?: string;
};
