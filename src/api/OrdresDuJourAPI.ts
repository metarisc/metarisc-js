// File generated from our OpenAPI spec
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
     * Suppression du dossier de l'ordre du jour d'une date de passage en commission.
     */
    deleteCommissionDateDossier(
        dossierId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/ordres_du_jour/{dossier_id}')
        });
    }
    
    /**
     * Mise à jour des détails d'un dossier lié à une date de passage en commission en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    updateCommissionDateDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<PassageCommissionDossier>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/ordres_du_jour/{dossier_id}'),
            body: Utils.payloadFilter(params)
        });
    }
    
}
