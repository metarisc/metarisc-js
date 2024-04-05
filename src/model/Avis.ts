export type Avis = {
    'avis_exploitation'?: AvisExploitationEnum;
};

export enum AvisExploitationEnum {
    FavorableExploitation = 'favorable_exploitation',
    DefavorableExploitation = 'defavorable_exploitation'
}
