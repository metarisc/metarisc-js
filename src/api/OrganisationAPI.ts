import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from "axios";
import { Organisation } from "../../src/model/Organisation";
import { PaginateOrganisations200Response } from "../../src/model/PaginateOrganisations200Response";

export class OrganisationAPI extends Core {
  constructor(config: MetariscConfig) {
    super(config);
  }

  async getOrganisation(orgId: string): Promise<AxiosResponse<Organisation>> {
    const pathVariable = { org_id: orgId };
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/organisations/{org_id}"),
      headers: {},
      params: {},
      body: {},
    });
  }

  /**
   * Liste paginée des organisations.
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateOrganisations(
    page?: number,
    perPage?: number
  ): Promise<AxiosResponse<PaginateOrganisations200Response>> {
    const pathVariable = {};
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/organisations/"),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }
  /**
   * Liste paginée des organisations.
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateOrganisationsIterator(
    page?: number,
    perPage?: number
  ): AsyncGenerator<PaginateOrganisations200Response> {
    const pathVariable = {};
    return this.autoPagingIterator({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/organisations/"),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }
}
