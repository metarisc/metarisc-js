import { Organisation } from '../../src/model/Organisation';

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
