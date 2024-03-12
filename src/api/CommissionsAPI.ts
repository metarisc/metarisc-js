import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import { Client } from "../client";
import { Collection } from "../collection";
import { Commission } from '../model/Commission';

export class CommissionsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Liste des commissions.
     */
    paginateCommissions(): Collection<Commission>
    {
        const pathVariable = {  };
        return this.collect<Commission>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
}
