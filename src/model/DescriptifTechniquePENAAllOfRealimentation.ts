export type DescriptifTechniquePENAAllOfRealimentation = {
    'debit'?: number;
    'diametreCanalisation'?: number;
    'nature'?: NatureEnum;
};

export enum NatureEnum {
    AdductionEau = 'ADDUCTION_EAU',
    Toiture = 'TOITURE',
    Autre = 'AUTRE'
}
