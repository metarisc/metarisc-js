// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { DossierBaseRattachement } from '../model/DossierBaseRattachement';

export class DossiersRattachementsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'un rattachement d'un dossier.
     */
    deleteRattachement(
        rattachementId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'rattachement_id': (new String(rattachementId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/dossiers_rattachements/{rattachement_id}'),
            transformResponse: [(data) => {
                if (!data) return data;
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Mise à jour d'un rattachement existant en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    postRattachement(
        rattachementId: string,
        params : any
    ) : Promise<AxiosResponse<DossierBaseRattachement>>
    {
        const pathVariable = { 'rattachement_id': (new String(rattachementId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers_rattachements/{rattachement_id}'),
            transformResponse: [(data) => {
                if (!data) return data;
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.dossier_enfant.createur?.roles) {
                    parsedData.dossier_enfant.createur.roles = new Set(parsedData.dossier_enfant.createur.roles);
                }
                if (parsedData && parsedData.dossier_enfant.modules) {
                    parsedData.dossier_enfant.modules = new Set(parsedData.dossier_enfant.modules);
                }
                if (parsedData && parsedData.dossier_enfant.workflows_actifs) {
                    parsedData.dossier_enfant.workflows_actifs = new Set(parsedData.dossier_enfant.workflows_actifs);
                }
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
}
