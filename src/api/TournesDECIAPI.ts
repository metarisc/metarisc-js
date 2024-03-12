import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import { Client } from "../client";
import { Collection } from "../collection";
import { TourneeDeci } from '../model/TourneeDeci';

export class TournesDECIAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Liste des tournées DECI.
     */
    paginateTourneesDeci(): Collection<TourneeDeci>
    {
        const pathVariable = {  };
        return this.collect<TourneeDeci>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
}
