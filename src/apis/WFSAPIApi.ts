
import { Metarisc, RequestConfig } from "../metarisc";
import { Utils } from "../utils";
import type { AxiosResponse } from 'axios';
import { GetGetFeature200Response } from '../models/GetGetFeature200Response';

/**
 * no description
 */
export class WFSAPIApi {
    constructor(private metarisc: Metarisc, private utils: Utils) {}

    /**
     * Le point de terminaison DescribeFeatureType décrit les informations de champ concernant une ou plusieurs entités du service WFS. Cela inclut les noms de champs, les types de champs, les valeurs minimales et maximales autorisées dans les champs et toute autre contrainte définie dans un champ des classes d’entités ou tables.
     * DescribeFeatureType
     */
    async getDescribeFeatureType(): Promise<AxiosResponse<any>>
    {
        const pathVariable = {  };
        return this.metarisc.request({
            method: 'GET',
            endpoint: this.utils.constructPath(pathVariable, '/wfs/DescribeFeatureType'),
            headers: {  },
            params: {  },
            body: {}
        } as RequestConfig);
    }

    /**
     * Le point de terminaison GetCapabilities permet aux clients de récupérer l\'ensemble des caractéristiques du service WFS. La réponse est au format XML.
     * GetCapabilities
     */
    async getGetCapabilities(): Promise<AxiosResponse<void>>
    {
        const pathVariable = {  };
        return this.metarisc.request({
            method: 'GET',
            endpoint: this.utils.constructPath(pathVariable, '/wfs/GetCapabilities'),
            headers: {  },
            params: {  },
            body: {}
        } as RequestConfig);
    }

    /**
     * Le point de terminaison GetFeature renvoie des informations concernant des types d’entités spécifiques disponibles par l’intermédiaire du service WFS.
     * GetFeature
     */
    async getGetFeature(): Promise<AxiosResponse<GetGetFeature200Response>>
    {
        const pathVariable = {  };
        return this.metarisc.request({
            method: 'GET',
            endpoint: this.utils.constructPath(pathVariable, '/wfs/GetFeature'),
            headers: {  },
            params: {  },
            body: {}
        } as RequestConfig);
    }
}
