import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Utilisateur } from '../model/Utilisateur';
import { Email } from '../model/Email';
import { OrganisationMembre } from '../model/OrganisationMembre';

export class UtilisateursAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * L'utilisateur connecté retourné par ce point de terminaison utilise le token d'accès généré par le service OpenID Connect afin de le lier à une identité connue de Metarisc. Si l'utilisateur est inconnu une erreur est retournée.
     */
    async getUtilisateursMoi(): Promise<AxiosResponse<Utilisateur>>
    {

        const pathVariable = { };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/utilisateurs/@moi'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Retourne un utilisateur Metarisc.
     */
    async getUtilisateurDetails(utilisateurId: string): Promise<AxiosResponse<Utilisateur>>
    {

        const pathVariable = { 'utilisateur_id': (new String(utilisateurId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/utilisateurs/{utilisateur_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Liste toutes les adresses mail de l'utilisateur connecté, y compris les adresses non publiquement accessibles.
     */
    paginateMoiEmails(page?: number, perPage?: number): Collection<Email>
    {
        const pathVariable = { };
        return this.collect<Email>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/utilisateurs/@moi/emails'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Retourne une liste des adresses mail publiques d'un utilisateur.
     */
    paginateUtilisateurEmails(utilisateurId: string, page?: number, perPage?: number): Collection<Email>
    {
        const pathVariable = { 'utilisateur_id': (new String(utilisateurId)).toString() };
        return this.collect<Email>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/utilisateurs/{utilisateur_id}/emails'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Retourne une liste d'organisations dont l'utilisateur est membre.
     */
    paginateUtilisateurOrganisations(utilisateurId: string, page?: number, perPage?: number): Collection<OrganisationMembre>
    {
        const pathVariable = { 'utilisateur_id': (new String(utilisateurId)).toString() };
        return this.collect<OrganisationMembre>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/utilisateurs/{utilisateur_id}/organisations'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
}
