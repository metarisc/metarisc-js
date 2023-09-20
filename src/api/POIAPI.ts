import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from "axios";
import { POI } from "../../src/model/POI";
import { PaginateContacts200Response } from "../../src/model/PaginateContacts200Response";
import { PaginateHistorique200Response } from "../../src/model/PaginateHistorique200Response";
import { PaginatePiecesJointes200Response } from "../../src/model/PaginatePiecesJointes200Response";
import { PaginatePoi200Response } from "../../src/model/PaginatePoi200Response";
import { PatchPoiRequest } from "../../src/model/PatchPoiRequest";

export class POIAPI extends Core {
  constructor(config: MetariscConfig) {
    super(config);
  }

  async getPoi(poiId: string): Promise<AxiosResponse<POI>> {
    const pathVariable = { poi_id: poiId };
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/poi/{poi_id}"),
      headers: {},
      params: {},
      body: {},
    });
  }

  /**
   * Récupération de la liste des contacts d'un POI.
   * @param poiId ID du POI
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateContacts(
    poiId: string,
    page?: number,
    perPage?: number
  ): Promise<AxiosResponse<PaginateContacts200Response>> {
    const pathVariable = { poi_id: poiId };
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/poi/{poi_id}/contacts"),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }
  /**
   * Récupération de la liste des contacts d'un POI.
   * @param poiId ID du POI
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateContactsIterator(
    poiId: string,
    page?: number,
    perPage?: number
  ): AsyncGenerator<PaginateContacts200Response> {
    const pathVariable = { poi_id: poiId };
    return this.autoPagingIterator({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/poi/{poi_id}/contacts"),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }

  /**
   * Récupération de l'historique d'un POI.
   * @param poiId ID du POI
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateHistorique(
    poiId: string,
    page?: number,
    perPage?: number
  ): Promise<AxiosResponse<PaginateHistorique200Response>> {
    const pathVariable = { poi_id: poiId };
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/poi/{poi_id}/historique"),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }
  /**
   * Récupération de l'historique d'un POI.
   * @param poiId ID du POI
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateHistoriqueIterator(
    poiId: string,
    page?: number,
    perPage?: number
  ): AsyncGenerator<PaginateHistorique200Response> {
    const pathVariable = { poi_id: poiId };
    return this.autoPagingIterator({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/poi/{poi_id}/historique"),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }

  /**
   * Récupération de la liste des pièces jointes d'un POI.
   * @param poiId ID du POI
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginatePiecesJointes(
    poiId: string,
    page?: number,
    perPage?: number
  ): Promise<AxiosResponse<PaginatePiecesJointes200Response>> {
    const pathVariable = { poi_id: poiId };
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(
        pathVariable,
        "/poi/{poi_id}/pieces_jointes"
      ),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }
  /**
   * Récupération de la liste des pièces jointes d'un POI.
   * @param poiId ID du POI
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginatePiecesJointesIterator(
    poiId: string,
    page?: number,
    perPage?: number
  ): AsyncGenerator<PaginatePiecesJointes200Response> {
    const pathVariable = { poi_id: poiId };
    return this.autoPagingIterator({
      method: "GET",
      endpoint: Utils.constructPath(
        pathVariable,
        "/poi/{poi_id}/pieces_jointes"
      ),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }

  /**
   * Récupération de la liste des POI selon des critères de recherche.
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginatePoi(
    page?: number,
    perPage?: number
  ): Promise<AxiosResponse<PaginatePoi200Response>> {
    const pathVariable = {};
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/poi/"),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }
  /**
   * Récupération de la liste des POI selon des critères de recherche.
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginatePoiIterator(
    page?: number,
    perPage?: number
  ): AsyncGenerator<PaginatePoi200Response> {
    const pathVariable = {};
    return this.autoPagingIterator({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/poi/"),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }

  async patchPoi(
    poiId: string,
    patchPoiRequest?: PatchPoiRequest
  ): Promise<AxiosResponse<POI>> {
    const pathVariable = { poi_id: poiId };
    return this.request({
      method: "PATCH",
      endpoint: Utils.constructPath(pathVariable, "/poi/{poi_id}"),
      headers: {},
      params: {},
      body: { test: patchPoiRequest?.test },
    });
  }
}
