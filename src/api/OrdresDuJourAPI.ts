import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { PassageCommissionDossier } from '../model/PassageCommissionDossier';

export class OrdresDuJourAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Mise à jour des détails d'un dossier lié à une date de passage en commission
     */
    async updateCommissionDateDossier(dossierId: string, params : { avis? : { type? : string } }): Promise<AxiosResponse<PassageCommissionDossier>>
    {

        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/ordres_du_jour/{dossier_id}'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
}
