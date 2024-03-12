export type OrganisationGeoservice = {
    'id'?: string;
    'organisation_id'?: string;
    'nom'?: string;
    'type'?: TypeEnum;
    'url'?: string;
};

export enum TypeEnum {
    Wfs = 'WFS',
    Wms = 'WMS'
}
