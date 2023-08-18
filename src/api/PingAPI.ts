import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from 'axios';
import { Ping200Response } from '../../src/model/Ping200Response';

export class PingAPI extends Core {
    constructor(config : MetariscConfig) {
        super(config);
    }

    /**
     * Permet de s'assurer que le service Metarisc est en ligne. Ping ... Pong !
     */
    async ping(): Promise<AxiosResponse<Ping200Response>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/ping'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
}
