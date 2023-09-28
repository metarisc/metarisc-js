import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from "axios";
import { Dossier } from "../../src/model/Dossier";
import { PaginateDossiers200Response } from "../../src/model/PaginateDossiers200Response";
import { PaginateSuiviAdministratif200Response } from "../../src/model/PaginateSuiviAdministratif200Response";
import { PaginateTags200Response } from "../../src/model/PaginateTags200Response";
import { PaginateWorkflowDocuments200Response } from "../../src/model/PaginateWorkflowDocuments200Response";
import { PaginateWorkflows200Response } from "../../src/model/PaginateWorkflows200Response";
import { PostDossierRequest } from "../../src/model/PostDossierRequest";
import { Workflow } from "../../src/model/Workflow";

export class DossiersAPI extends Core {
  constructor(config: MetariscConfig) {
    super(config);
  }

  async getDossier(dossierId: string): Promise<AxiosResponse<Dossier>> {
    const pathVariable = { dossier_id: dossierId };
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/dossiers/{dossier_id}"),
      headers: {},
      params: {},
      body: {},
    });
  }

  async getDossierWorkflowsWorkflow(
    dossierId: string,
    workflowId: string
  ): Promise<AxiosResponse<Workflow>> {
    const pathVariable = { dossier_id: dossierId, workflow_id: workflowId };
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(
        pathVariable,
        "/dossiers/{dossier_id}/workflows/{workflow_id}"
      ),
      headers: {},
      params: {},
      body: {},
    });
  }

  /**
   * Récupération de la liste des dossiers selon des critères de recherche.
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateDossiers(
    page?: number,
    perPage?: number
  ): Promise<AxiosResponse<PaginateDossiers200Response>> {
    const pathVariable = {};
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/dossiers/"),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }
  /**
   * Récupération de la liste des dossiers selon des critères de recherche.
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateDossiersIterator(
    page?: number,
    perPage?: number
  ): AsyncGenerator<PaginateDossiers200Response> {
    const pathVariable = {};
    return this.autoPagingIterator({
      method: "GET",
      endpoint: Utils.constructPath(pathVariable, "/dossiers/"),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }

  /**
   * Récupération de la liste du suivi administratif d'un dossier.
   * @param dossierId ID du dossier
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateSuiviAdministratif(
    dossierId: string,
    page?: number,
    perPage?: number
  ): Promise<AxiosResponse<PaginateSuiviAdministratif200Response>> {
    const pathVariable = { dossier_id: dossierId };
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(
        pathVariable,
        "/dossiers/{dossier_id}/suivi_administratif"
      ),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }
  /**
   * Récupération de la liste du suivi administratif d'un dossier.
   * @param dossierId ID du dossier
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateSuiviAdministratifIterator(
    dossierId: string,
    page?: number,
    perPage?: number
  ): AsyncGenerator<PaginateSuiviAdministratif200Response> {
    const pathVariable = { dossier_id: dossierId };
    return this.autoPagingIterator({
      method: "GET",
      endpoint: Utils.constructPath(
        pathVariable,
        "/dossiers/{dossier_id}/suivi_administratif"
      ),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }

  /**
   * Récupération de la liste des tags d'un dossier.
   * @param dossierId ID du dossier
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateTags(
    dossierId: string,
    page?: number,
    perPage?: number
  ): Promise<AxiosResponse<PaginateTags200Response>> {
    const pathVariable = { dossier_id: dossierId };
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(
        pathVariable,
        "/dossiers/{dossier_id}/tags"
      ),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }
  /**
   * Récupération de la liste des tags d'un dossier.
   * @param dossierId ID du dossier
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateTagsIterator(
    dossierId: string,
    page?: number,
    perPage?: number
  ): AsyncGenerator<PaginateTags200Response> {
    const pathVariable = { dossier_id: dossierId };
    return this.autoPagingIterator({
      method: "GET",
      endpoint: Utils.constructPath(
        pathVariable,
        "/dossiers/{dossier_id}/tags"
      ),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }

  /**
   * Liste des documents liés à un workflow.
   * @param dossierId
   * @param workflowId
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateWorkflowDocuments(
    dossierId: string,
    workflowId: string,
    page?: number,
    perPage?: number
  ): Promise<AxiosResponse<PaginateWorkflowDocuments200Response>> {
    const pathVariable = { dossier_id: dossierId, workflow_id: workflowId };
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(
        pathVariable,
        "/dossiers/{dossier_id}/workflows/{workflow_id}/documents"
      ),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }
  /**
   * Liste des documents liés à un workflow.
   * @param dossierId
   * @param workflowId
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateWorkflowDocumentsIterator(
    dossierId: string,
    workflowId: string,
    page?: number,
    perPage?: number
  ): AsyncGenerator<PaginateWorkflowDocuments200Response> {
    const pathVariable = { dossier_id: dossierId, workflow_id: workflowId };
    return this.autoPagingIterator({
      method: "GET",
      endpoint: Utils.constructPath(
        pathVariable,
        "/dossiers/{dossier_id}/workflows/{workflow_id}/documents"
      ),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }

  /**
   * Récupération de la liste des workflows d'un dossier.
   * @param dossierId ID du dossier
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateWorkflows(
    dossierId: string,
    page?: number,
    perPage?: number
  ): Promise<AxiosResponse<PaginateWorkflows200Response>> {
    const pathVariable = { dossier_id: dossierId };
    return this.request({
      method: "GET",
      endpoint: Utils.constructPath(
        pathVariable,
        "/dossiers/{dossier_id}/workflows"
      ),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }
  /**
   * Récupération de la liste des workflows d'un dossier.
   * @param dossierId ID du dossier
   * @param page Numéro de page
   * @param perPage Nombre de résultats demandé
   */
  paginateWorkflowsIterator(
    dossierId: string,
    page?: number,
    perPage?: number
  ): AsyncGenerator<PaginateWorkflows200Response> {
    const pathVariable = { dossier_id: dossierId };
    return this.autoPagingIterator({
      method: "GET",
      endpoint: Utils.constructPath(
        pathVariable,
        "/dossiers/{dossier_id}/workflows"
      ),
      headers: {},
      params: { page: page.toString(), per_page: perPage.toString() },
      body: {},
    });
  }

  async patchDossier(
    dossierId: string,
    dossier?: Dossier
  ): Promise<AxiosResponse<Dossier>> {
    const pathVariable = { dossier_id: dossierId };
    return this.request({
      method: "PATCH",
      endpoint: Utils.constructPath(pathVariable, "/dossiers/{dossier_id}"),
      headers: {},
      params: {},
      body: {
        id: dossier?.id,
        type: dossier?.type,
        description: dossier?.description,
        date_de_creation: dossier?.date_de_creation,
        createur: dossier?.createur,
        application_utilisee: dossier?.application_utilisee,
        statut: dossier?.statut,
      },
    });
  }

  async postDossier(
    postDossierRequest?: PostDossierRequest
  ): Promise<AxiosResponse<Dossier>> {
    const pathVariable = {};
    return this.request({
      method: "POST",
      endpoint: Utils.constructPath(pathVariable, "/dossiers/"),
      headers: {},
      params: {},
      body: {
        titre: postDossierRequest?.titre,
        description: postDossierRequest?.description,
        workflows: postDossierRequest?.workflows,
      },
    });
  }
}
