// File generated from our OpenAPI spec
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
    deleteNotification(
        notificationId: string
    ) : Promise<AxiosResponse<void>>
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
    getNotification(
        notificationId: string
    ) : Promise<AxiosResponse<Notification>>
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
    paginateNotifications(
    ) : Collection<Notification>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/notifications'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Permet de marquer la notification donnée comme lue par l'utilisateur.
     */
    notificationMarquerCommeLue(
        notificationId: string
    ) : Promise<AxiosResponse<Notification>>
    {
        const pathVariable = { 'notification_id': (new String(notificationId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/notifications/{notification_id}/marquer_comme_lue'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Création d'une notification.
     */
    postNotification(
        params : any
    ) : Promise<AxiosResponse<Notification>>
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
