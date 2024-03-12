export type OrganisationMembre = {
    'organisation_id'?: string;
    'utilisateur_id'?: string;
    'date_integration'?: Date;
    'role'?: RoleEnum;
};

export enum RoleEnum {
    Membre = 'membre'
}
