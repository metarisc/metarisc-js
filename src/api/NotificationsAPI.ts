import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Notification } from '../model/Notification';

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
        const pathVariable = { 'notification_id': (new String(notificationId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/notifications/{notification_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération des détails d'une notification correspondante à l'id donné.
     * @param notificationId Identifiant unique de la Notification
     */
    async getNotification(notificationId: string): Promise<AxiosResponse<Notification>>
    {
        const pathVariable = { 'notification_id': (new String(notificationId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/notifications/{notification_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération des détails de toutes les notifications existantes pour l'utilisateur connecté.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateNotifications(page?: number, perPage?: number): Collection<Notification>
    {
        const pathVariable = {  };
        return this.collect<Notification>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/notifications'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
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
            endpoint: Utils.constructPath(pathVariable, '/notifications'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': notification?.id, 'title': notification?.title, 'message': notification?.message, 'contexte': notification?.contexte, 'date_creation': notification?.date_creation ? Utils.formatDate(notification?.date_creation) : undefined, 'date_de_lecture': notification?.date_de_lecture ? Utils.formatDate(notification?.date_de_lecture) : undefined, 'utilisateur_id': notification?.utilisateur_id, 'utilisateur': notification?.utilisateur } )
        });
    }
    
}
