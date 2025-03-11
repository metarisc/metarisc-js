// File generated from our OpenAPI spec
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
     */
    deletePrescription(
        prescriptionId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'prescription_id': (new String(prescriptionId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/prescriptions/{prescription_id}'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Suppression d'un support réglementaire.
     */
    deleteSupportReglementaire(
        supportReglementaireId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'support_reglementaire_id': (new String(supportReglementaireId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/supports_reglementaires/{support_reglementaire_id}'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération des détails d'une prescription dans la bibliothèque.
     */
    getPrescription(
        prescriptionId: string
    ) : Promise<AxiosResponse<Prescription>>
    {
        const pathVariable = { 'prescription_id': (new String(prescriptionId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/prescriptions/{prescription_id}'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération des détails d'un support réglementaire.
     */
    getSupportReglementaire(
        supportReglementaireId: string
    ) : Promise<AxiosResponse<PrescriptionSupportReglementaire>>
    {
        const pathVariable = { 'support_reglementaire_id': (new String(supportReglementaireId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/supports_reglementaires/{support_reglementaire_id}'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Liste des prescriptions.
     */
    paginatePrescriptions(
        contenu? : string
    ) : Collection<Prescription>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/prescriptions'),
            params: Utils.payloadFilter({ 'contenu': contenu === undefined ? undefined : (new String(contenu)).toString() }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Liste des supports réglementaires.
     */
    paginateSupportsReglementaires(
        contenu? : string,
        reference? : string
    ) : Collection<PrescriptionSupportReglementaire>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/supports_reglementaires'),
            params: Utils.payloadFilter({ 'contenu': contenu === undefined ? undefined : (new String(contenu)).toString(), 'reference': reference === undefined ? undefined : (new String(reference)).toString() }),
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Modification d'une prescription existante en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    patchPrescription(
        prescriptionId: string,
        params : any
    ) : Promise<AxiosResponse<Prescription>>
    {
        const pathVariable = { 'prescription_id': (new String(prescriptionId)).toString() };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/prescriptions/{prescription_id}'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'une nouvelle prescription type dans la bibliothèque.
     */
    postPrescription(
        params : any
    ) : Promise<AxiosResponse<Prescription>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/prescriptions'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajouter un support réglementaire.
     */
    postSupportReglementaire(
        params : any
    ) : Promise<AxiosResponse<PrescriptionSupportReglementaire>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/supports_reglementaires'),
            params: Utils.payloadFilter({ }),
            body: Utils.payloadFilter(params)
        });
    }
    
}
