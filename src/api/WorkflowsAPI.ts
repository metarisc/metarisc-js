// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Workflow } from '../model/Workflow';

export class WorkflowsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération des détails d'un workflow.
     */
    getWorkflowsDetails(
        workflowId: string
    ) : Promise<AxiosResponse<Workflow>>
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
     * Terminer un workflow. Cela met à jour l'ensemble de son traitement.
     */
    postTerminerWorkflow(
        workflowId: string
    ) : void
    {
        const pathVariable = { 'workflow_id': (new String(workflowId)).toString() };
        this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/workflows/{workflow_id}/terminer'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Mise à jour d'un workflow.
     */
    updateWorkflowsDetails(
        workflowId: string,
        params : any
    ) : Promise<AxiosResponse<Workflow>>
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
