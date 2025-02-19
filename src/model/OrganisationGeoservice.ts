// File generated from our OpenAPI spec
import { Organisation } from './Organisation';

export type OrganisationGeoservice = {
    'id': string;
    'organisation': Organisation;
    'nom': string;
    'type': TypeEnum;
    'url': string;
};

export enum TypeEnum {
    WFS = 'WFS',
    WMS = 'WMS'
}
