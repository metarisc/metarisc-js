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
     */
    async deleteNotification(notificationId: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'notification_id': (new String(notificationId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/notifications/{notification_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération des détails d'une notification correspondante à l'id donné.
     */
    async getNotification(notificationId: string): Promise<AxiosResponse<Notification>>
    {
        const pathVariable = { 'notification_id': (new String(notificationId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/notifications/{notification_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération des détails de toutes les notifications existantes pour l'utilisateur connecté.
     */
    paginateNotifications(page?: number, perPage?: number): Collection<Notification>
    {
        const pathVariable = { };
        return this.collect<Notification>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/notifications'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Création d'une notification.
     */
    async postNotification(params : { title : string, message : string, type : string, utilisateurId : string, contexte ? : { [key: string]: string; }, }): Promise<AxiosResponse<Notification>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/notifications'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
}
