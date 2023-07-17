
import { Metarisc, RequestConfig } from "../metarisc";
import { Utils } from "../utils";
import type { AxiosResponse } from 'axios';
import { GetMoiEmails200Response } from '../models/GetMoiEmails200Response';
import { Utilisateur } from '../models/Utilisateur';

/**
 * no description
 */
export class UtilisateursAPIApi {
    constructor(private metarisc: Metarisc, private utils: Utils) {}

    /**
     * L\'utilisateur connecté retourné par ce point de terminaison utilise le token d\'accès généré par le service OpenID Connect afin de le lier à une identité connue de Metarisc. Si l\'utilisateur est inconnu une erreur est retournée.
     * Utilisateur connecté
     */
    async getUtilisateursmoi(): Promise<AxiosResponse<Utilisateur>>
    {
        const pathVariable = {  };
        return this.metarisc.request({
            method: 'GET',
            endpoint: this.utils.constructPath(pathVariable, '/@moi'),
            headers: {  },
            params: {  },
            body: {}
        } as RequestConfig);
    }

    /**
     * L\'utilisateur connecté retourné par ce point de terminaison utilise le token d\'accès généré par le service OpenID Connect afin de le lier à une identité connue de Metarisc. Si l\'utilisateur est inconnu une erreur est retournée.
     * Utilisateur connecté
     */
    async getUtilisateursmoi1(): Promise<AxiosResponse<Utilisateur>>
    {
        const pathVariable = {  };
        return this.metarisc.request({
            method: 'GET',
            endpoint: this.utils.constructPath(pathVariable, '/utilisateurs/@moi'),
            headers: {  },
            params: {  },
            body: {}
        } as RequestConfig);
    }

    /**
     * Liste toutes les adresses mail de l\'utilisateur connecté, y compris les adresses non publiquement accessibles.
     * Liste des adresses mail de l\'utilisateur connecté
     * @param page Le numéro de page.
     * @param perPage Limite le nombre d\&#39;objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    getmoiEmails(page?: string, perPage?: string): AsyncGenerator<GetMoiEmails200Response>
    {
        const pathVariable = {  };
        return this.metarisc.autoPagingIterator({
            method: 'GET',
            endpoint: this.utils.constructPath(pathVariable, '/@moi/emails'),
            headers: {  },
            params: { 'page': page, 'per_page': perPage },
            body: {}
        } as RequestConfig);
    }

    /**
     * Liste toutes les adresses mail de l\'utilisateur connecté, y compris les adresses non publiquement accessibles.
     * Liste des adresses mail de l\'utilisateur connecté
     * @param page Le numéro de page.
     * @param perPage Limite le nombre d\&#39;objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    getmoiEmails1(page?: string, perPage?: string): AsyncGenerator<GetMoiEmails200Response>
    {
        const pathVariable = {  };
        return this.metarisc.autoPagingIterator({
            method: 'GET',
            endpoint: this.utils.constructPath(pathVariable, '/utilisateurs/@moi/emails'),
            headers: {  },
            params: { 'page': page, 'per_page': perPage },
            body: {}
        } as RequestConfig);
    }
}
