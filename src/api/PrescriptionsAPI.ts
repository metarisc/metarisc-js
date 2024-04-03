import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { PostPrescriptionRequest } from '../model/PostPrescriptionRequest';
import { PostSupportReglementaireRequest } from '../model/PostSupportReglementaireRequest';
import { Prescription } from '../model/Prescription';
import { PrescriptionSupportReglementaire } from '../model/PrescriptionSupportReglementaire';

export class PrescriptionsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'une prescription type de la bibliothèque.
     * @param prescriptionId Identifiant unique de la prescription
     */
    async deletePrescription(prescriptionId: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'prescription_id': prescriptionId };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/prescriptions/{prescription_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Suppression d'un support réglementaire.
     * @param supportReglementaireId Identifiant unique du support réglementaire
     */
    async deleteSupportReglementaire(supportReglementaireId: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'support_reglementaire_id': supportReglementaireId };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/supports_reglementaires/{support_reglementaire_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Récupération des détails d'une prescription dans la bibliothèque.
     * @param prescriptionId Identifiant unique de la prescription
     */
    async getPrescription(prescriptionId: string): Promise<AxiosResponse<Prescription>>
    {
        const pathVariable = { 'prescription_id': prescriptionId };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/prescriptions/{prescription_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Récupération des détails d'un support réglementaire.
     * @param supportReglementaireId Identifiant unique du support réglementaire
     */
    async getSupportReglementaire(supportReglementaireId: string): Promise<AxiosResponse<PrescriptionSupportReglementaire>>
    {
        const pathVariable = { 'support_reglementaire_id': supportReglementaireId };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/supports_reglementaires/{support_reglementaire_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Liste des prescriptions.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginatePrescriptions(page?: number, perPage?: number): Collection<Prescription>
    {
        const pathVariable = {  };
        return this.collect<Prescription>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/prescriptions'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
    /**
     * Liste des supports réglementaires.
     */
    paginateSupportsReglementaires(): Collection<PrescriptionSupportReglementaire>
    {
        const pathVariable = {  };
        return this.collect<PrescriptionSupportReglementaire>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/supports_reglementaires'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Ajout d'une nouvelle prescription type dans la bibliothèque.
     * @param postPrescriptionRequest 
     */
    async postPrescription(postPrescriptionRequest?: PostPrescriptionRequest): Promise<AxiosResponse<Prescription>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/prescriptions'),
            headers: {  },
            params: {  },
            body:  { 'contenu': postPrescriptionRequest?.contenu, 'type': postPrescriptionRequest?.type, 'supports_reglementaires': postPrescriptionRequest?.supports_reglementaires } 
        });
    }
    
    /**
     * Ajouter un support réglementaire.
     * @param postSupportReglementaireRequest 
     */
    async postSupportReglementaire(postSupportReglementaireRequest?: PostSupportReglementaireRequest): Promise<AxiosResponse<PrescriptionSupportReglementaire>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/supports_reglementaires'),
            headers: {  },
            params: {  },
            body:  { 'nature': postSupportReglementaireRequest?.nature, 'legifrance_cid': postSupportReglementaireRequest?.legifrance_cid, 'contenu': postSupportReglementaireRequest?.contenu, 'titre': postSupportReglementaireRequest?.titre, 'etat': postSupportReglementaireRequest?.etat, 'reference': postSupportReglementaireRequest?.reference } 
        });
    }
    
}
