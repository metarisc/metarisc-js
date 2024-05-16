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
     * Retourne un utilisateur Metarisc.
     * @param utilisateurId Identifiant unique de l'utilisateur
     */
    async getUtilisateurDetails(utilisateurId: string): Promise<AxiosResponse<Utilisateur>>
    {
        const pathVariable = { 'utilisateur_id': (new String(utilisateurId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/utilisateurs/{utilisateur_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * L'utilisateur connecté retourné par ce point de terminaison utilise le token d'accès généré par le service OpenID Connect afin de le lier à une identité connue de Metarisc. Si l'utilisateur est inconnu une erreur est retournée.
     */
    async getUtilisateursMoi(): Promise<AxiosResponse<Utilisateur>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/utilisateurs/@moi'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Liste toutes les adresses mail de l'utilisateur connecté, y compris les adresses non publiquement accessibles.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateMoiEmails(page?: number, perPage?: number): Collection<Email>
    {
        const pathVariable = {  };
        return this.collect<Email>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/utilisateurs/@moi/emails'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Retourne une liste des adresses mail publiques d'un utilisateur.
     * @param utilisateurId Identifiant unique de l'utilisateur
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateUtilisateurEmails(utilisateurId: string, page?: number, perPage?: number): Collection<Email>
    {
        const pathVariable = { 'utilisateur_id': (new String(utilisateurId)).toString() };
        return this.collect<Email>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/utilisateurs/{utilisateur_id}/emails'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Retourne une liste d'organisations dont l'utilisateur est membre.
     * @param utilisateurId Identifiant unique de l'utilisateur
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateUtilisateurOrganisations(utilisateurId: string, page?: number, perPage?: number): Collection<OrganisationMembre>
    {
        const pathVariable = { 'utilisateur_id': (new String(utilisateurId)).toString() };
        return this.collect<OrganisationMembre>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/utilisateurs/{utilisateur_id}/organisations'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
}
