import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import { Client } from "../client";
import { Collection } from "../collection";
import { FeedMessage } from '../model/FeedMessage';

export class FeedAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération d'une liste de message composant un flux d'activité pour l'utilisateur connecté.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateFeedMessages(page?: number, perPage?: number): Collection<FeedMessage>
    {
        const pathVariable = {  };
        return this.collect<FeedMessage>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/feed'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
}
