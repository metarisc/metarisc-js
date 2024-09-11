import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { PieceJointe } from '../model/PieceJointe';
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
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() }
        });
    }
    
    /**
     * Ajout d'un document.
     */
    async postDocumentsWorkflow(workflowId: string, params : { url : string, est_sensible : boolean, nom ? : string, description ? : string, type ? : string, }): Promise<AxiosResponse<PieceJointe>>
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
    async updateWorkflowsDetails(workflowId: string, params : { observations ? : string, dossier_lie ? : { objet? : string }[], pei_lie ? : string, anomalies_levees ? : { }[], commission_date ? : { id? : string, date_debut? : Date, date_fin? : Date, type? : string, libelle? : string } , avis_de_commission ? : any, analyse_de_risque ? : string, avis_rapporteur ? : { type? : string } , descriptif_effectifs ? : string, facteur_dangerosite ? : number, derogations ? : string, prescriptions ? : { contenu? : string, type? : string, supports_reglementaires_id? : { } }[], mesures_compensatoires ? : string, mesures_complementaires ? : string, date_arrivee_secretariat ? : Date, passage_commission ? : { date_debut? : Date, date_fin? : Date, type? : string, libelle? : string } , commission ? : { type? : string, libelle? : string, presidence_id? : string } , est_valide ? : boolean, est_relu ? : boolean }): Promise<AxiosResponse<Workflow>>
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
