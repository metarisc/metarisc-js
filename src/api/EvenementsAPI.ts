import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from "axios";
import { Evenement } from "../../src/model/Evenement";
import { PaginateEvenementUtilisateurs200Response } from "../../src/model/PaginateEvenementUtilisateurs200Response";
import { PaginateEvenements200Response } from "../../src/model/PaginateEvenements200Response";
import { PostEvenementRequest } from "../../src/model/PostEvenementRequest";
import { Client } from "../client";

export class EvenementsAPI extends Core {
  constructor(config: MetariscConfig, client?: Client) {
    super(config, client);
  }

  async deleteEvenement(evenementId: string): Promise<AxiosResponse<void>> {
    const pathVariable = { evenement_id: evenementId };
    return this.request({
      method: "DELETE",
      endpoint: Utils.constructPath(pathVariable, "/evenements/{evenement_id}"),
      headers: {},
      params: {},
      body: {},
    });
  }

  async getEvenement(
    evenementId: string,
    evenement?: Evenement
  ): Promise<AxiosResponse<Evenement>> {
    const pathVariable = { evenement_id: evenementId };
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/evenements/{evenement_id}"),
      headers: {},
      params: {},
      body: {
        id: evenement?.id,
        title: evenement?.title,
        type: evenement?.type,
        description: evenement?.description,
        date_debut: evenement?.date_debut,
        date_fin: evenement?.date_fin,
      },
    });
  }

  /**
   * Récupération d'une liste paginée d'utilisateurs liés à un événement calendaire.
   * @param evenementId
   * @param page Le numéro de la page.
   * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
   */
  paginateEvenementUtilisateurs(
    evenementId: string,
    page?: number,
    perPage?: number
  ): Promise<AxiosResponse<PaginateEvenementUtilisateurs200Response>> {
    const pathVariable = { evenement_id: evenementId };
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(
        pathVariable,
        "/evenements/{evenement_id}/utilisateurs"
      ),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }
  /**
   * Récupération d'une liste paginée d'utilisateurs liés à un événement calendaire.
   * @param evenementId
   * @param page Le numéro de la page.
   * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
   */
  paginateEvenementUtilisateursIterator(
    evenementId: string,
    page?: number,
    perPage?: number
  ): AsyncGenerator<PaginateEvenementUtilisateurs200Response> {
    const pathVariable = { evenement_id: evenementId };
    return this.autoPagingIterator({
      method: "GET",
      endpoint: Utils.constructPath(
        pathVariable,
        "/evenements/{evenement_id}/utilisateurs"
      ),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }

  /**
   * Récupération des détails de tous les événements calendaires existants.
   * @param page Le numéro de la page.
   * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
   * @param type Le type d'événement
   * @param period la période (ISO 8601) séparée par un slash (/) pendant laquelle l'événement se déroule. Exemple 2004-12-02T23:00/2005-01-01T12:30
   */
  paginateEvenements(
    page?: number,
    perPage?: number,
    type?: string,
    period?: string
  ): Promise<AxiosResponse<PaginateEvenements200Response>> {
    const pathVariable = {};
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/evenements/"),
      headers: {},
      params: {
        page: page.toString(),
        per_page: perPage.toString(),
        type: type,
        period: period,
      },
      body: {},
    });
  }
  /**
   * Récupération des détails de tous les événements calendaires existants.
   * @param page Le numéro de la page.
   * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
   * @param type Le type d'événement
   * @param period la période (ISO 8601) séparée par un slash (/) pendant laquelle l'événement se déroule. Exemple 2004-12-02T23:00/2005-01-01T12:30
   */
  paginateEvenementsIterator(
    page?: number,
    perPage?: number,
    type?: string,
    period?: string
  ): AsyncGenerator<PaginateEvenements200Response> {
    const pathVariable = {};
    return this.autoPagingIterator({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/evenements/"),
      headers: {},
      params: {
        page: page.toString(),
        per_page: perPage.toString(),
        type: type,
        period: period,
      },
      body: {},
    });
  }

  async postEvenement(
    postEvenementRequest?: PostEvenementRequest
  ): Promise<AxiosResponse<Evenement>> {
    const pathVariable = {};
    return this.request({
      method: "POST",
      endpoint: Utils.constructPath(pathVariable, "/evenements/"),
      headers: {},
      params: {},
      body: {
        title: postEvenementRequest?.title,
        type: postEvenementRequest?.type,
        description: postEvenementRequest?.description,
        date_debut: postEvenementRequest?.date_debut,
        date_fin: postEvenementRequest?.date_fin,
      },
    });
  }
}
