import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { GetPing200Response } from '../model/GetPing200Response';

export class PingAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Permet de s'assurer que le service Metarisc est en ligne. Ping ... Pong ! Cet endpoint peut être utilisé sans authentification.
     */
    async ping(): Promise<AxiosResponse<GetPing200Response>>
    {
        const pathVariable = { };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/ping'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
}
