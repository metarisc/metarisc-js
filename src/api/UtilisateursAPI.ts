import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from "axios";
import { PaginateMoiEmails200Response } from "../../src/model/PaginateMoiEmails200Response";
import { Utilisateur } from "../../src/model/Utilisateur";

export class UtilisateursAPI extends Core {
  constructor(config: MetariscConfig) {
    super(config);
  }

  /**
   * L'utilisateur connecté retourné par ce point de terminaison utilise le token d'accès généré par le service OpenID Connect afin de le lier à une identité connue de Metarisc. Si l'utilisateur est inconnu une erreur est retournée.
   */
  async getUtilisateursMoi(): Promise<AxiosResponse<Utilisateur>> {
    const pathVariable = {};
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/@moi"),
      headers: {},
      params: {},
      body: {},
    });
  }

  /**
   * L'utilisateur connecté retourné par ce point de terminaison utilise le token d'accès généré par le service OpenID Connect afin de le lier à une identité connue de Metarisc. Si l'utilisateur est inconnu une erreur est retournée.
   */
  async getUtilisateursMoi1(): Promise<AxiosResponse<Utilisateur>> {
    const pathVariable = {};
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/utilisateurs/@moi"),
      headers: {},
      params: {},
      body: {},
    });
  }

  /**
   * Liste toutes les adresses mail de l'utilisateur connecté, y compris les adresses non publiquement accessibles.
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateMoiEmails(
    page?: number,
    perPage?: number
  ): AsyncGenerator<PaginateMoiEmails200Response> {
    const pathVariable = {};
    return this.autoPagingIterator({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/@moi/emails"),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }

  /**
   * Liste toutes les adresses mail de l'utilisateur connecté, y compris les adresses non publiquement accessibles.
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateMoiEmails1(
    page?: number,
    perPage?: number
  ): AsyncGenerator<PaginateMoiEmails200Response> {
    const pathVariable = {};
    return this.autoPagingIterator({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/utilisateurs/@moi/emails"),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }
}
