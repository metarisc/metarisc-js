import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
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
        const pathVariable = { 'prescription_id': (new String(prescriptionId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/prescriptions/{prescription_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Suppression d'un support réglementaire.
     * @param supportReglementaireId Identifiant unique du support réglementaire
     */
    async deleteSupportReglementaire(supportReglementaireId: string): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'support_reglementaire_id': (new String(supportReglementaireId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/supports_reglementaires/{support_reglementaire_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération des détails d'une prescription dans la bibliothèque.
     * @param prescriptionId Identifiant unique de la prescription
     */
    async getPrescription(prescriptionId: string): Promise<AxiosResponse<Prescription>>
    {
        const pathVariable = { 'prescription_id': (new String(prescriptionId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/prescriptions/{prescription_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération des détails d'un support réglementaire.
     * @param supportReglementaireId Identifiant unique du support réglementaire
     */
    async getSupportReglementaire(supportReglementaireId: string): Promise<AxiosResponse<PrescriptionSupportReglementaire>>
    {
        const pathVariable = { 'support_reglementaire_id': (new String(supportReglementaireId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/supports_reglementaires/{support_reglementaire_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
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
            body: Utils.payloadFilter({})
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
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Ajout d'une nouvelle prescription type dans la bibliothèque.
     * @param prescription 
     */
    async postPrescription(prescription?: Prescription): Promise<AxiosResponse<Prescription>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/prescriptions'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': prescription?.id, 'contenu': prescription?.contenu, 'type': prescription?.type, 'supports_reglementaires': prescription?.supports_reglementaires, 'supports_reglementaires_id': prescription?.supports_reglementaires_id } )
        });
    }
    
    /**
     * Ajouter un support réglementaire.
     * @param prescriptionSupportReglementaire 
     */
    async postSupportReglementaire(prescriptionSupportReglementaire?: PrescriptionSupportReglementaire): Promise<AxiosResponse<PrescriptionSupportReglementaire>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/supports_reglementaires'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'id': prescriptionSupportReglementaire?.id, 'nature': prescriptionSupportReglementaire?.nature, 'legifrance_cid': prescriptionSupportReglementaire?.legifrance_cid, 'contenu': prescriptionSupportReglementaire?.contenu, 'titre': prescriptionSupportReglementaire?.titre, 'etat': prescriptionSupportReglementaire?.etat, 'reference': prescriptionSupportReglementaire?.reference } )
        });
    }
    
}
