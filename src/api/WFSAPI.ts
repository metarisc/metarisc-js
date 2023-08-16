import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from 'axios';
import { GetFeature200Response } from '../../src/model/GetFeature200Response';

/**
 * no description
 */
export class WFSAPI extends Core {
    constructor(config : MetariscConfig) {
        super(config);
    }

    /**
     * Le point de terminaison DescribeFeatureType décrit les informations de champ concernant une ou plusieurs entités du service WFS. Cela inclut les noms de champs, les types de champs, les valeurs minimales et maximales autorisées dans les champs et toute autre contrainte définie dans un champ des classes d’entités ou tables.
     * Informations de champ concernant les features WFS
     */
    async describFeatureType(): Promise<AxiosResponse<any>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/wfs/DescribeFeatureType'),
            headers: {  },
            params: {  },
            body: {}
        });
    }

    /**
     * Le point de terminaison GetCapabilities permet aux clients de récupérer l\'ensemble des caractéristiques du service WFS. La réponse est au format XML.
     * Caractéristiques du service WFS
     */
    async getCapabilities(): Promise<AxiosResponse<void>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/wfs/GetCapabilities'),
            headers: {  },
            params: {  },
            body: {}
        });
    }

    /**
     * Le point de terminaison GetFeature renvoie des informations concernant des types d’entités spécifiques disponibles par l’intermédiaire du service WFS.
     * Informations sur des features
     */
    async getFeature(): Promise<AxiosResponse<GetFeature200Response>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/wfs/GetFeature'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
}
