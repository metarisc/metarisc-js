import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from 'axios';
import { Dossier } from '../../src/model/Dossier';
import { PaginateDossiers200Response } from '../../src/model/PaginateDossiers200Response';
import { PaginateSuiviAdministratif200Response } from '../../src/model/PaginateSuiviAdministratif200Response';
import { PaginateTags200Response } from '../../src/model/PaginateTags200Response';
import { PaginateWorkflows200Response } from '../../src/model/PaginateWorkflows200Response';

export class DossiersAPI extends Core {
    constructor(config : MetariscConfig) {
        super(config);
    }

    /**
     * Récupération de l'ensemble des données d'un dossier.
     * @param dossierId ID du dossier
     */
    async getDossier(dossierId: string): Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'dossier_id': dossierId };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }

    /**
     * Récupération de la liste des dossiers selon des critères de recherche.
     */
    paginateDossiers(): AsyncGenerator<PaginateDossiers200Response>
    {
        const pathVariable = {  };
        return this.autoPagingIterator({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/'),
            headers: {  },
            params: {  },
            body: {}
        });
    }

    /**
     * Récupération de la liste du suivi administratif d'un dossier.
     * @param dossierId ID du dossier
     */
    paginateSuiviAdministratif(dossierId: string): AsyncGenerator<PaginateSuiviAdministratif200Response>
    {
        const pathVariable = { 'dossier_id': dossierId };
        return this.autoPagingIterator({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/suivi_administratif'),
            headers: {  },
            params: {  },
            body: {}
        });
    }

    /**
     * Récupération de la liste des tags d'un dossier.
     * @param dossierId ID du dossier
     */
    paginateTags(dossierId: string): AsyncGenerator<PaginateTags200Response>
    {
        const pathVariable = { 'dossier_id': dossierId };
        return this.autoPagingIterator({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/tags'),
            headers: {  },
            params: {  },
            body: {}
        });
    }

    /**
     * Récupération de la liste des workflows d'un dossier.
     * @param dossierId ID du dossier
     */
    paginateWorkflows(dossierId: string): AsyncGenerator<PaginateWorkflows200Response>
    {
        const pathVariable = { 'dossier_id': dossierId };
        return this.autoPagingIterator({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows'),
            headers: {  },
            params: {  },
            body: {}
        });
    }

    /**
     * Modification d'un dossier existant.
     * @param dossierId ID du dossier
     */
    async patchDossier(dossierId: string): Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'dossier_id': dossierId };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }

    /**
     * Création d'un nouveau dossier.
     * @param dossier 
     */
    async postDossier(dossier?: Dossier): Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/'),
            headers: {  },
            params: {  },
            body:  { 'id': dossier?.id, 'type': dossier?.type, 'description': dossier?.description, 'programmation': dossier?.programmation, 'dateDeCreation': dossier?.dateDeCreation, 'createur': dossier?.createur, 'applicationUtilisee': dossier?.applicationUtilisee, 'statut': dossier?.statut } 
        });
    }
}