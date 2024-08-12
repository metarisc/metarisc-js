import { Organisation } from './Organisation';

export type OrganisationGeoservice = {
    'id'?: string;
    'organisation'?: Organisation;
    'nom'?: string;
    'type'?: TypeEnum;
    'url'?: string;
};

export enum TypeEnum {
    Wfs = 'WFS',
    Wms = 'WMS'
}
