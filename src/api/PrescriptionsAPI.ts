import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import { Client } from "../client";
import { Collection } from "../collection";
import { Prescription } from '../model/Prescription';

export class PrescriptionsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Liste des prescriptions.
     */
    paginatePrescriptions(): Collection<Prescription>
    {
        const pathVariable = {  };
        return this.collect<Prescription>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/prescriptions'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
}
