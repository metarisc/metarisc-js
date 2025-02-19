// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { PieceJointe } from '../model/PieceJointe';

export class DocumentsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'un document existant.
     */
    deleteDocument(
        documentId: string
    ) : void
    {
        const pathVariable = { 'document_id': (new String(documentId)).toString() };
        this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/documents/{document_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération d'un document.
     */
    getDocument(
        documentId: string
    ) : Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'document_id': (new String(documentId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/documents/{document_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des documents.
     */
    paginate(
    ) : Collection<PieceJointe>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/documents'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Mise à jour d'un document existant en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    postDocument(
        documentId: string,
        params : any
    ) : Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'document_id': (new String(documentId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/documents/{document_id}'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
}
