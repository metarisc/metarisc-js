import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from 'axios';
import { GetNotification404Response } from '../../src/model/GetNotification404Response';
import { Notification } from '../../src/model/Notification';
import { PaginateNotifications200Response } from '../../src/model/PaginateNotifications200Response';
import { PaginateNotifications500Response } from '../../src/model/PaginateNotifications500Response';
import { PostNotification400Response } from '../../src/model/PostNotification400Response';
import { PostNotification500Response } from '../../src/model/PostNotification500Response';

export class NotificationsAPI extends Core {
    constructor(config : MetariscConfig) {
        super(config);
    }

    /**
     * Suppression d'une notification correspondante à l'id donné.
     * @param notificationId L'id de la notification demandée
     */
    async deleteNotification(notificationId: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'notification_id': notificationId };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/notifications/{notification_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }

    /**
     * Récupération des détails d'une notification correspondante à l'id donné.
     * @param notificationId L'id de la notification demandée
     * @param notification 
     */
    async getNotification(notificationId: string, notification?: Notification): Promise<AxiosResponse<Notification>>
    {
        const pathVariable = { 'notification_id': notificationId };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/notifications/{notification_id}'),
            headers: {  },
            params: {  },
            body:  { 'id': notification?.id, 'title': notification?.title, 'message': notification?.message, 'contexte': notification?.contexte, 'dateCreation': notification?.dateCreation, 'dateDeLecture': notification?.dateDeLecture, 'utilisateurId': notification?.utilisateurId } 
        });
    }

    /**
     * Récupération des détails de toutes les notifications existantes.
     * @param page Le numéro de la page.
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginateNotifications(page?: number, perPage?: number): AsyncGenerator<PaginateNotifications200Response>
    {
        const pathVariable = {  };
        return this.autoPagingIterator({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/notifications/'),
            headers: {  },
            params: { 'page': page, 'per_page': perPage },
            body: {}
        });
    }

    /**
     * Création d'une notification.
     * @param notification 
     */
    async postNotification(notification?: Notification): Promise<AxiosResponse<Notification>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/notifications/'),
            headers: {  },
            params: {  },
            body:  { 'id': notification?.id, 'title': notification?.title, 'message': notification?.message, 'contexte': notification?.contexte, 'dateCreation': notification?.dateCreation, 'dateDeLecture': notification?.dateDeLecture, 'utilisateurId': notification?.utilisateurId } 
        });
    }
}
