import { Organisation } from '../../src/model/Organisation';
import { Utilisateur } from '../../src/model/Utilisateur';

export type OrganisationMembre = {
    'organisation'?: Organisation;
    'utilisateur_id'?: string;
    'utilisateur'?: Utilisateur;
    'date_integration'?: Date;
    'role'?: RoleEnum;
};

export enum RoleEnum {
    Membre = 'membre',
    Invite = 'invite',
    InvitationEnCours = 'invitation_en_cours'
}
