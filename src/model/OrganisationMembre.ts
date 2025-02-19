// File generated from our OpenAPI spec
import { Organisation } from './Organisation';
import { Utilisateur } from './Utilisateur';

export type OrganisationMembre = {
    'organisation': Organisation;
    'utilisateur': Utilisateur;
    'date_integration'?: Date;
    'role': RoleEnum;
};

export enum RoleEnum {
    MEMBRE = 'membre',
    INVITE = 'invite',
    INVITATION_EN_COURS = 'invitation_en_cours'
}
