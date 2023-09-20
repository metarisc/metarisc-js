import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from "axios";
import { PaginateTickets200Response } from "../../src/model/PaginateTickets200Response";
import { PostTicketRequest } from "../../src/model/PostTicketRequest";
import { Ticket } from "../../src/model/Ticket";

export class SupportAPI extends Core {
  constructor(config: MetariscConfig) {
    super(config);
  }

  async getTicket(ticketId: string): Promise<AxiosResponse<Ticket>> {
    const pathVariable = { ticket_id: ticketId };
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/support/{ticket_id}"),
      headers: {},
      params: {},
      body: {},
    });
  }

  /**
   * Récupération de la liste des tickets de support.
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateTickets(
    page?: number,
    perPage?: number
  ): Promise<AxiosResponse<PaginateTickets200Response>> {
    const pathVariable = {};
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/support/"),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }
  /**
   * Récupération de la liste des tickets de support.
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateTicketsIterator(
    page?: number,
    perPage?: number
  ): AsyncGenerator<PaginateTickets200Response> {
    const pathVariable = {};
    return this.autoPagingIterator({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/support/"),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }

  async postTicket(
    postTicketRequest?: PostTicketRequest
  ): Promise<AxiosResponse<Ticket>> {
    const pathVariable = {};
    return this.request({
      method: "POST",
      endpoint: Utils.constructPath(pathVariable, "/support/"),
      headers: {},
      params: {},
      body: {
        subject: postTicketRequest?.subject,
        description: postTicketRequest?.description,
      },
    });
  }
}
