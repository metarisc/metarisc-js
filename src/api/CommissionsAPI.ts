// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Commission } from '../model/Commission';
import { CommissionMembre } from '../model/CommissionMembre';
import { CommissionPreferences } from '../model/CommissionPreferences';
import { PassageCommission } from '../model/PassageCommission';

export class CommissionsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'un passage en commission.
     */
    deletePassageDatesCommission(
        commissionId: string,
        passageId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString(), 'passage_id': (new String(passageId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dates/{passage_id}'),
            transformResponse: [(data) => {
                if (!data) return data;
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération des détails de la commission.
     */
    getCommission(
        commissionId: string
    ) : Promise<AxiosResponse<Commission>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}'),
            transformResponse: [(data) => {
                if (!data) return data;
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * L'export du courrier de levée de prescription est une opération qui permet de récupérer un fichier PDF contenant l'ensemble des éléments du courrier de levée de prescription. Le SIS réalise pour chaque dossier un document de levée de prescription détaillé par ERP.
     */
    getPdfLeveeDePrescriptionsDossierDossiersCommission(
        commissionId: string,
        dossierId: string
    ) : Promise<AxiosResponse<Blob>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString(), 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            responseType: 'blob',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dossiers/{dossier_id}/levee_de_prescriptions/pdf')
        });
    }
    
    /**
     * L'export du courrier de levée de réserve est une opération qui permet de récupérer un fichier PDF contenant l'ensemble des éléments du courrier de levée de réserve. Le SIS réalise pour chaque dossier un document de levée de réserve détaillé par ERP.
     */
    getPdfLeveeDeReservesDossierDossiersCommission(
        commissionId: string,
        dossierId: string
    ) : Promise<AxiosResponse<Blob>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString(), 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            responseType: 'blob',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dossiers/{dossier_id}/levee_de_reserves/pdf')
        });
    }
    
    /**
     * L'export de la préparation de visite est une opération qui permet de récupérer un fichier PDF contenant l'ensemble des éléments de la préparation de visite. Le SIS réalise pour chaque visite un document de préparation de visite détaillé par ERP.
     */
    getPdfPreparationVisiteDossierDossiersCommission(
        commissionId: string,
        dossierId: string
    ) : Promise<AxiosResponse<Blob>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString(), 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            responseType: 'blob',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dossiers/{dossier_id}/preparation_visite/pdf')
        });
    }
    
    /**
     * L'export du rapport d'étude est une opération qui permet de récupérer un fichier PDF contenant l'ensemble des éléments du dossier d'étude. Le SIS réalise pour chaque étude ou visite un rapport détaillé par ERP. Ce document est présenté en commission par le sapeur pompier préventionniste en sa qualité de rapporteur et de technicien du risque. Le PDF généré est un document de synthèse qui reprend les informations du dossier, en se basant sur le modèle de rapport de l'organisation. L'export du dossier est une opération qui peut être longue, en fonction de la taille du dossier et du nombre d'éléments à exporter.
     */
    getPdfRapportEtudeDossierDossiersCommission(
        commissionId: string,
        dossierId: string
    ) : Promise<AxiosResponse<Blob>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString(), 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            responseType: 'blob',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dossiers/{dossier_id}/rapport_etude/pdf')
        });
    }
    
    /**
     * L'export du rapport de visite est une opération qui permet de récupérer un fichier PDF contenant l'ensemble des éléments du dossier de visite. Le SIS réalise pour chaque étude ou visite un rapport détaillé par ERP. Ce document est présenté en commission par le sapeur pompier préventionniste en sa qualité de rapporteur et de technicien du risque. Le PDF généré est un document de synthèse qui reprend les informations du dossier, en se basant sur le modèle de rapport de l'organisation. L'export du dossier est une opération qui peut être longue, en fonction de la taille du dossier et du nombre d'éléments à exporter.
     */
    getPdfRapportVisiteDossierDossiersCommission(
        commissionId: string,
        dossierId: string
    ) : Promise<AxiosResponse<Blob>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString(), 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            responseType: 'blob',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dossiers/{dossier_id}/rapport_visite/pdf')
        });
    }
    
    /**
     * Récupération des préférences de la commission.
     */
    getCommissionPreferences(
        commissionId: string
    ) : Promise<AxiosResponse<CommissionPreferences>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/preferences'),
            transformResponse: [(data) => {
                if (!data) return data;
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Liste des commissions.
     */
    paginateCommissions(
        libelle? : string,
        type? : 'Sous-commission départementale' | 'Commission communale' | 'Commission intercommunale' | 'Commission d\'arrondissement' | 'CoDERST'
    ) : Collection<Commission>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions'),
            params: Utils.payloadFilter({
                'libelle': libelle === undefined ? undefined : (new String(libelle)).toString(), 
                'type': type === undefined ? undefined : (new String(type)).toString()
            }),
            transformResponse: [(data) => {
                if (!data) return data;
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des dates de passage de la commission. Cela peut représenter une visite périodique sur site de la commission, ou un passage en salle.
     */
    paginateCommissionDates(
        commissionId: string,
        fromDate? : Date,
        types? : string | Array<string>
    ) : Collection<PassageCommission>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dates'),
            params: Utils.payloadFilter({
                'from_date': fromDate === undefined ? undefined : Utils.formatDate(fromDate), 
                'types': types === undefined ? undefined : (new String(types)).toString()
            }),
            transformResponse: [(data) => {
                if (!data) return data;
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des membres de la commission.
     */
    paginateCommissionMembres(
        commissionId: string,
        commission? : string
    ) : Collection<CommissionMembre>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/membres'),
            params: Utils.payloadFilter({
                'commission': commission === undefined ? undefined : (new String(commission)).toString()
            }),
            transformResponse: [(data) => {
                if (!data) return data;
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Modification d'une commission existant en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    patchCommission(
        commissionId: string,
        params : any
    ) : Promise<AxiosResponse<Commission>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}'),
            transformResponse: [(data) => {
                if (!data) return data;
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Modification d'un passage en commission existant en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    patchPassageDatesCommission(
        commissionId: string,
        passageId: string,
        params : any
    ) : Promise<AxiosResponse<PassageCommission>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString(), 'passage_id': (new String(passageId)).toString() };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dates/{passage_id}'),
            transformResponse: [(data) => {
                if (!data) return data;
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajoute une commission.
     */
    postCommission(
        params : any
    ) : Promise<AxiosResponse<Commission>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/commissions'),
            transformResponse: [(data) => {
                if (!data) return data;
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'une date de passage en commission.
     */
    postCommissionDate(
        commissionId: string,
        params : any
    ) : Promise<AxiosResponse<PassageCommission>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dates'),
            transformResponse: [(data) => {
                if (!data) return data;
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un membre dans la commission.
     */
    postMembresCommission(
        commissionId: string,
        params : any
    ) : Promise<AxiosResponse<CommissionMembre>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/membres'),
            transformResponse: [(data) => {
                if (!data) return data;
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Mise à jour des préférences de la commission en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    postCommissionPreferences(
        commissionId: string,
        params : any
    ) : Promise<AxiosResponse<CommissionPreferences>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/preferences'),
            transformResponse: [(data) => {
                if (!data) return data;
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
}
