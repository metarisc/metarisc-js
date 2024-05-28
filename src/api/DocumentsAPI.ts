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
     * @param documentId 
     */
    async deleteDocument(documentId: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'document_id': (new String(documentId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/documents/{document_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération d'un document.
     * @param documentId 
     */
    async getDocument(documentId: string): Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'document_id': (new String(documentId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/documents/{document_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des documents.
     * @param page Numéro de page
     * @param perPage Limite le nombre d'objets retournés. La limite est comprise entre 1 et 100, la valeur par défaut étant de 10.
     */
    paginate(page?: number, perPage?: number): Collection<PieceJointe>
    {
        const pathVariable = {  };
        return this.collect<PieceJointe>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/documents'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Mise à jour d'un document existant.
     * @param documentId 
     * @param pieceJointe 
     */
    async postDocument(documentId: string, pieceJointe?: PieceJointe): Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'document_id': (new String(documentId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/documents/{document_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': pieceJointe?.id, 'url': pieceJointe?.url, 'nom': pieceJointe?.nom, 'description': pieceJointe?.description, 'type': pieceJointe?.type } )
        });
    }
    
}
