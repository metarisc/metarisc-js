import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Utilisateur } from '../model/Utilisateur';

import { Email } from '../model/Email';

export class UtilisateursAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * L'utilisateur connecté retourné par ce point de terminaison utilise le token d'accès généré par le service OpenID Connect afin de le lier à une identité connue de Metarisc. Si l'utilisateur est inconnu une erreur est retournée.
     */
    async getUtilisateursMoi(): Promise<AxiosResponse<Utilisateur>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/@moi'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * L'utilisateur connecté retourné par ce point de terminaison utilise le token d'accès généré par le service OpenID Connect afin de le lier à une identité connue de Metarisc. Si l'utilisateur est inconnu une erreur est retournée.
     */
    async getUtilisateursMoi1(): Promise<AxiosResponse<Utilisateur>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/utilisateurs/@moi'),
            headers: {  },
            params: {  },
            body: {}
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
            endpoint: Utils.constructPath(pathVariable, '/@moi/emails'),
            headers: {  },
            params: { 'page': page.toString(), 'per_page': perPage.toString() },
            body: {}
        });
    }
    
    /**
     * Liste toutes les adresses mail de l'utilisateur connecté, y compris les adresses non publiquement accessibles.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateMoiEmails1(page?: number, perPage?: number): Collection<Email>
    {
        const pathVariable = {  };
        return this.collect<Email>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/utilisateurs/@moi/emails'),
            headers: {  },
            params: { 'page': page.toString(), 'per_page': perPage.toString() },
            body: {}
        });
    }
    
}
