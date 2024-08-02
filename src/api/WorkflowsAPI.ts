import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { PieceJointe } from '../model/PieceJointe';
import { UNKNOWN_BASE_TYPE } from '../model/UNKNOWN_BASE_TYPE';
import { Workflow } from '../model/Workflow';

export class WorkflowsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération des détails d'un workflow.
     */
    async getWorkflowsDetails(workflowId: string): Promise<AxiosResponse<Workflow>>
    {
        const pathVariable = { 'workflow_id': (new String(workflowId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/workflows/{workflow_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des documents.
     */
    paginateWorkflowDocuments(workflowId: string, page?: number, perPage?: number): Collection<PieceJointe>
    {
        const pathVariable = { 'workflow_id': (new String(workflowId)).toString() };
        return this.collect<PieceJointe>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/workflows/{workflow_id}/documents'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Ajout d'un document.
     */
    async postDocumentsWorkflow(workflowId: string, params : { url : string, nom? : string, description? : string, type? : string }): Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'workflow_id': (new String(workflowId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/workflows/{workflow_id}/documents'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Terminer un workflow. Cela met à jour l'ensemble de son traitement.
     */
    async postTerminerWorkflow(workflowId: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'workflow_id': (new String(workflowId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/workflows/{workflow_id}/terminer'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Mise à jour d'un workflow.
     */
    async updateWorkflowsDetails(workflowId: string,UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE | null, params : { }): Promise<AxiosResponse<Workflow>>
    {
        const pathVariable = { 'workflow_id': (new String(workflowId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/workflows/{workflow_id}'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
}