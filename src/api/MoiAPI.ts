import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Moi200Response } from '../model/Moi200Response';

export class MoiAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupérer les détails de l'utilisateur connecté.
     */
    async moi(): Promise<AxiosResponse<Moi200Response>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/@moi'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
}
