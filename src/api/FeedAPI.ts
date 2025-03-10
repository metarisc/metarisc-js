// File generated from our OpenAPI spec
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
    paginateFeedMessages(
    ) : Collection<FeedMessage>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/feed'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Ajoute un message dans le feed général.
     */
    postMessage(
        params : any
    ) : Promise<AxiosResponse<FeedMessage>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/feed'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter(params)
        });
    }
    
}
