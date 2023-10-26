import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from 'axios';
import { Ping200Response } from '../../src/model/Ping200Response';
import { Client } from "../client";

export class PingAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
      }
    
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
