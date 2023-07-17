
import { Metarisc, RequestConfig } from "../metarisc";
import { Utils } from "../utils";
import type { AxiosResponse } from 'axios';
import { GetPing200Response } from '../models/GetPing200Response';

/**
 * no description
 */
export class DefaultApi {
    constructor(private metarisc: Metarisc, private utils: Utils) {}

    /**
     * Permet de s\'assurer que le service Metarisc est en ligne. Ping ... Pong !
     * Ping
     */
    async getPing(): Promise<AxiosResponse<GetPing200Response>>
    {
        const pathVariable = {  };
        return this.metarisc.request({
            method: 'GET',
            endpoint: this.utils.constructPath(pathVariable, '/ping'),
            headers: {  },
            params: {  },
            body: {}
        } as RequestConfig);
    }
}
