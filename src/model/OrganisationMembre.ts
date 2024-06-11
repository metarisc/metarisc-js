import { Organisation } from '../../src/model/Organisation';
import { OrganisationMembreUtilisateur } from '../../src/model/OrganisationMembreUtilisateur';

export type OrganisationMembre = {
    'organisation'?: Organisation;
    'utilisateur_id'?: string;
    'utilisateur'?: OrganisationMembreUtilisateur;
    'date_integration'?: Date;
    'role'?: RoleEnum;
};

export enum RoleEnum {
    Membre = 'membre',
    Invite = 'invite',
    InvitationEnCours = 'invitation_en_cours'
}
