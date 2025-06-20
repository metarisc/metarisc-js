// File generated from our OpenAPI spec
import { Utilisateur } from './Utilisateur';

export type DossierAffectation = {
    'id': string;
    'role': RoleEnum;
    'utilisateur': Utilisateur;
};

export enum RoleEnum {
    ADMIN = 'admin',
    PREVENTIONNISTE = 'preventionniste',
    SECRETARIAT_PREV = 'secretariat_prev',
    RAPPORTEUR = 'rapporteur',
    RELECTEUR_VALIDEUR = 'relecteur|valideur'
}
