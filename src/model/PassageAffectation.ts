// File generated from our OpenAPI spec
import { Utilisateur } from './Utilisateur';

export type PassageAffectation = {
    'id': string;
    'role': RoleEnum;
    'utilisateur': Utilisateur;
};

export enum RoleEnum {
    RAPPORTEUR = 'rapporteur'
}
