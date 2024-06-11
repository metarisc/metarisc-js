import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Utilisateur } from '../model/Utilisateur';

export class MoiAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupérer les détails de l'utilisateur connecté.
     */
    async moi(): Promise<AxiosResponse<Utilisateur>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/@moi'),
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
}
