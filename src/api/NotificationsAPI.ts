import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from 'axios';
import { GetNotification404Response } from '../../src/model/GetNotification404Response';
import { Notification } from '../../src/model/Notification';
import { PaginateNotifications200Response } from '../../src/model/PaginateNotifications200Response';
import { PostNotification400Response } from '../../src/model/PostNotification400Response';
import { PostNotification500Response } from '../../src/model/PostNotification500Response';
import { PostNotificationRequest } from '../../src/model/PostNotificationRequest';

export class NotificationsAPI extends Core {
    constructor(config : MetariscConfig) {
        super(config);
    }
    
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
     * Récupération des détails de toutes les notifications existantes.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateNotifications(page?: number, perPage?: number): Promise<AxiosResponse<PaginateNotifications200Response>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/notifications/'),
            headers: {  },
            params: { 'page': page, 'per_page': perPage },
            body: {}
        });
    }
    /**
     * Récupération des détails de toutes les notifications existantes.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateNotificationsIterator(page?: number, perPage?: number): AsyncGenerator<PaginateNotifications200Response>
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
    
    async postNotification(postNotificationRequest?: PostNotificationRequest): Promise<AxiosResponse<Notification>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/notifications/'),
            headers: {  },
            params: {  },
            body:  { 'title': postNotificationRequest?.title, 'message': postNotificationRequest?.message, 'contexte': postNotificationRequest?.contexte, 'utilisateurId': postNotificationRequest?.utilisateurId } 
        });
    }
    
}
