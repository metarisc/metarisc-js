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
    async deleteDocument(documentId: string): Promise<AxiosResponse<void>>
    {

        const pathVariable = { 'document_id': (new String(documentId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/documents/{document_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération d'un document.
     */
    async getDocument(documentId: string): Promise<AxiosResponse<PieceJointe>>
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
    paginate(page?: number, perPage?: number): Collection<PieceJointe>
    {
        const pathVariable = { };
        return this.collect<PieceJointe>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/documents'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Mise à jour d'un document existant.
     */
    async postDocument(documentId: string, params : { nom? : string, description? : string, type? : string }): Promise<AxiosResponse<PieceJointe>>
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
