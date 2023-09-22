export type DescriptifTechniquePENAAllOfRealimentation = {
    'debit'?: number;
    'diametre_canalisation'?: number;
    'nature'?: NatureEnum;
};

export enum NatureEnum {
    AdductionEau = 'ADDUCTION_EAU',
    Toiture = 'TOITURE',
    Autre = 'AUTRE'
}
