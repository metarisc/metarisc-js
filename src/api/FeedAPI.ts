import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { FeedMessage } from '../model/FeedMessage';

export class FeedAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération d'une liste de message composant un flux d'activité pour l'utilisateur connecté.
     */
    paginateFeedMessages(page?: number, perPage?: number): Collection<FeedMessage>
    {
        const pathVariable = { };
        return this.collect<FeedMessage>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/feed'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Ajoute un message dans le feed général.
     */
    async postMessage(params : { titre : string, type : string, texte : string, }): Promise<AxiosResponse<FeedMessage>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/feed'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
}
