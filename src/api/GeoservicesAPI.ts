// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";

export class GeoservicesAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'un géo-service existant d'une organisation.
     */
    deleteGeoservice(
        geoserviceId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'geoservice_id': (new String(geoserviceId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/geoservices/{geoservice_id}'),
            transformResponse: [(data) => {
                if (!data) return data;
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
}
