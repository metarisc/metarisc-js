import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from "axios";
import { Notification } from "../../src/model/Notification";
import { PaginateNotifications200Response } from "../../src/model/PaginateNotifications200Response";
import { PostNotificationRequest } from "../../src/model/PostNotificationRequest";
import { Client } from "../client";

export class NotificationsAPI extends Core {
  constructor(config: MetariscConfig, client?: Client) {
    super(config, client);
  }

  async deleteNotification(
    notificationId: string
  ): Promise<AxiosResponse<void>> {
    const pathVariable = { notification_id: notificationId };
    return this.request({
      method: "DELETE",
      endpoint: Utils.constructPath(
        pathVariable,
        "/notifications/{notification_id}"
      ),
      headers: {},
      params: {},
      body: {},
    });
  }

  async getNotification(
    notificationId: string
  ): Promise<AxiosResponse<Notification>> {
    const pathVariable = { notification_id: notificationId };
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(
        pathVariable,
        "/notifications/{notification_id}"
      ),
      headers: {},
      params: {},
      body: {},
    });
  }

  /**
   * Récupération des détails de toutes les notifications existantes.
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateNotifications(
    page?: number,
    perPage?: number
  ): Promise<AxiosResponse<PaginateNotifications200Response>> {
    const pathVariable = {};
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/notifications/"),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }
  /**
   * Récupération des détails de toutes les notifications existantes.
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateNotificationsIterator(
    page?: number,
    perPage?: number
  ): AsyncGenerator<PaginateNotifications200Response> {
    const pathVariable = {};
    return this.autoPagingIterator({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/notifications/"),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }

  async postNotification(
    postNotificationRequest?: PostNotificationRequest
  ): Promise<AxiosResponse<Notification>> {
    const pathVariable = {};
    return this.request({
      method: "POST",
      endpoint: Utils.constructPath(pathVariable, "/notifications/"),
      headers: {},
      params: {},
      body: {
        title: postNotificationRequest?.title,
        message: postNotificationRequest?.message,
        contexte: postNotificationRequest?.contexte,
        utilisateur_id: postNotificationRequest?.utilisateur_id,
      },
    });
  }
}
