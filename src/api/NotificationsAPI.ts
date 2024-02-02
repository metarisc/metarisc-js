import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Notification } from '../model/Notification';
import { PostNotificationRequest } from '../model/PostNotificationRequest';

export class NotificationsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'une notification correspondante à l'id donné.
     * @param notificationId Identifiant unique de la Notification
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
     * @param notificationId Identifiant unique de la Notification
     */
    async getNotification(notificationId: string): Promise<AxiosResponse<Notification>>
    {
        const pathVariable = { 'notification_id': notificationId };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/notifications/{notification_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Récupération des détails de toutes les notifications existantes pour l'utilisateur connecté.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateNotifications(page?: number, perPage?: number): Collection<>
    {
        const pathVariable = {  };
        return this.collect<>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/notifications'),
            headers: {  },
            params: { 'page': page.toString(), 'per_page': perPage.toString() },
            body: {}
        });
    }
    
    /**
     * Création d'une notification.
     * @param postNotificationRequest 
     */
    async postNotification(postNotificationRequest?: PostNotificationRequest): Promise<AxiosResponse<Notification>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/notifications'),
            headers: {  },
            params: {  },
            body:  { 'title': postNotificationRequest?.title, 'message': postNotificationRequest?.message, 'contexte': postNotificationRequest?.contexte, 'utilisateur_id': postNotificationRequest?.utilisateur_id } 
        });
    }
    
}
