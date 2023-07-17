
import { Metarisc, RequestConfig } from "../metarisc";
import { Utils } from "../utils";
import type { AxiosResponse } from 'axios';
import { GetNotification200Response } from '../models/GetNotification200Response';
import { GetNotification500Response } from '../models/GetNotification500Response';
import { GetNotificationById404Response } from '../models/GetNotificationById404Response';
import { Notification } from '../models/Notification';
import { PostNotification400Response } from '../models/PostNotification400Response';
import { PostNotification500Response } from '../models/PostNotification500Response';

/**
 * no description
 */
export class NotificationsAPIApi {
    constructor(private metarisc: Metarisc, private utils: Utils) {}

    /**
     * Suppression d\'une notification correspondante à l\'id donné.
     * Suppression d\'une notification
     * @param notificationId L\&#39;id de la notification demandée
     */
    async deleteId(notificationId: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'notification_id': notificationId };
        return this.metarisc.request({
            method: 'DELETE',
            endpoint: this.utils.constructPath(pathVariable, '/notifications/{notification_id}'),
            headers: {  },
            params: {  },
            body: {}
        } as RequestConfig);
    }

    /**
     * Récupération des détails de toutes les notifications existantes.
     * Liste des notifications
     * @param page Le numéro de la page.
     * @param perPage Limite le nombre d\&#39;objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    getNotification(page?: number, perPage?: number): AsyncGenerator<GetNotification200Response>
    {
        const pathVariable = {  };
        return this.metarisc.autoPagingIterator({
            method: 'GET',
            endpoint: this.utils.constructPath(pathVariable, '/notifications/'),
            headers: {  },
            params: { 'page': page, 'per_page': perPage },
            body: {}
        } as RequestConfig);
    }

    /**
     * Récupération des détails d\'une notification correspondante à l\'id donné.
     * Récupération des détails d\'une notification
     * @param notificationId L\&#39;id de la notification demandée
     */
    async getNotificationById(notificationId: string): Promise<AxiosResponse<Notification>>
    {
        const pathVariable = { 'notification_id': notificationId };
        return this.metarisc.request({
            method: 'GET',
            endpoint: this.utils.constructPath(pathVariable, '/notifications/{notification_id}'),
            headers: {  },
            params: {  },
            body: {}
        } as RequestConfig);
    }

    /**
     * Création d\'une notification.
     * Déclenchement d\'une notification
     * @param notification 
     */
    async postNotification(notification?: Notification): Promise<AxiosResponse<Notification>>
    {
        const pathVariable = {  };
        return this.metarisc.request({
            method: 'POST',
            endpoint: this.utils.constructPath(pathVariable, '/notifications/'),
            headers: {  },
            params: {  },
            body:  { 'id': notification?.id, 'title': notification?.title, 'message': notification?.message, 'contexte': notification?.contexte, 'dateCreation': notification?.dateCreation, 'dateDeLecture': notification?.dateDeLecture, 'utilisateurConcerneId': notification?.utilisateurConcerneId } 
        } as RequestConfig);
    }
}
