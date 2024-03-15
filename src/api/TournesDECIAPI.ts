import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { TourneeDeci } from '../model/TourneeDeci';
import { TourneeDeciPei } from '../model/TourneeDeciPei';

export class TournesDECIAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération des détails de la tournée DECI.
     * @param tourneeDeciId Identifiant de la tournée DECI
     */
    async getTourneeDeci(tourneeDeciId: string): Promise<AxiosResponse<TourneeDeci>>
    {
        const pathVariable = { 'tournee_deci_id': tourneeDeciId };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Récupération des détails liés au contrôle d'un PEI d'une tournée.
     * @param tourneeDeciId Identifiant de la tournée DECI
     * @param peiId Identifiant du PEI lié au contrôle
     */
    async getTourneeDeciPei(tourneeDeciId: string, peiId: string): Promise<AxiosResponse<TourneeDeciPei>>
    {
        const pathVariable = { 'tournee_deci_id': tourneeDeciId, 'pei_id': peiId };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}/pei/{pei_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Récupération de la liste des contrôles PEI liés à la tournée DECI.
     * @param tourneeDeciId Identifiant de la tournée DECI
     */
    paginateTourneeDeciPei(tourneeDeciId: string): Collection<TourneeDeciPei>
    {
        const pathVariable = { 'tournee_deci_id': tourneeDeciId };
        return this.collect<TourneeDeciPei>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}/pei'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Liste des tournées DECI.
     */
    paginateTourneesDeci(): Collection<TourneeDeci>
    {
        const pathVariable = {  };
        return this.collect<TourneeDeci>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
}
