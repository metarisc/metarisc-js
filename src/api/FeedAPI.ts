import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
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
    getFeedMessages(): Collection<FeedMessage>
    {
        const pathVariable = {  };
        return this.collect<FeedMessage>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/feed'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
}
