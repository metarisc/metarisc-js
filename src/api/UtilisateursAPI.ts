// File generated from our OpenAPI spec
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
    getUtilisateursMoi(
    ) : Promise<AxiosResponse<Utilisateur>>
    {
        const pathVariable = { };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/utilisateurs/@moi'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Retourne un utilisateur Metarisc.
     */
    getUtilisateurDetails(
        utilisateurId: string
    ) : Promise<AxiosResponse<Utilisateur>>
    {
        const pathVariable = { 'utilisateur_id': (new String(utilisateurId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/utilisateurs/{utilisateur_id}'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Liste toutes les adresses mail de l'utilisateur connecté, y compris les adresses non publiquement accessibles.
     */
    paginateMoiEmails(
    ) : Collection<Email>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/utilisateurs/@moi/emails'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Retourne une liste des adresses mail publiques d'un utilisateur.
     */
    paginateUtilisateurEmails(
        utilisateurId: string
    ) : Collection<Email>
    {
        const pathVariable = { 'utilisateur_id': (new String(utilisateurId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/utilisateurs/{utilisateur_id}/emails'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Retourne une liste d'organisations dont l'utilisateur est membre.
     */
    paginateUtilisateurOrganisations(
        utilisateurId: string
    ) : Collection<OrganisationMembre>
    {
        const pathVariable = { 'utilisateur_id': (new String(utilisateurId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/utilisateurs/{utilisateur_id}/organisations'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Liste des utilisateurs.
     */
    paginateUtilisateurs(
        lastName? : string
    ) : Collection<Utilisateur>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/utilisateurs'),
            params: Utils.payloadFilter({ 'last_name': (new String(lastName)).toString() }),
            body: Utils.payloadFilter({})
        });
    }
    
}
