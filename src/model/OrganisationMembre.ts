import { Organisation } from './Organisation';
import { Utilisateur } from './Utilisateur';

export type OrganisationMembre = {
    'organisation'?: Organisation;
    'utilisateur'?: Utilisateur;
    'date_integration'?: Date;
    'role'?: RoleEnum;
};

export enum RoleEnum {
    Membre = 'membre',
    Invite = 'invite',
    InvitationEnCours = 'invitation_en_cours'
}
