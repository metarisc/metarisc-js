// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { PassageCommission } from '../model/PassageCommission';
import { PassageCommissionDossier } from '../model/PassageCommissionDossier';

export class DatesPassageCommissionAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * L'export de la convocation des membres est une opération qui permet de récupérer un fichier PDF contenant la convocation pour une date de passage en commission. Le PDF généré est un document de synthèse qui reprend les informations de la commission, en se basant sur le modèle de rapport de l'organisation. La génération du PDF est une opération qui peut être longue, en fonction de la taille et du nombre d'éléments à exporter.
     */
    getConvocationPdfDate(
        dateId: string
    ) : Promise<AxiosResponse<Blob>>
    {
        const pathVariable = { 'date_id': (new String(dateId)).toString() };
        return this.request({
            method: 'GET',
            responseType: 'blob',
            endpoint: Utils.constructPath(pathVariable, '/dates_passage_commission/{date_id}/convocation_pdf')
        });
    }
    
    /**
     * Récupération d'une date de passage en commission.
     */
    getCommissionDate(
        dateId: string
    ) : Promise<AxiosResponse<PassageCommission>>
    {
        const pathVariable = { 'date_id': (new String(dateId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dates_passage_commission/{date_id}')
        });
    }
    
    /**
     * Récupération d'une liste de dossiers à l'ordre du jour liés à une date de passage en commission.
     */
    paginateCommissionDateDossiers(
        dateId: string
    ) : Collection<PassageCommissionDossier>
    {
        const pathVariable = { 'date_id': (new String(dateId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dates_passage_commission/{date_id}/ordre_du_jour')
        });
    }
    
    /**
     * Ajout d'un dossier à l'ordre du jour d'un passage en commission.
     */
    postCommissionDateDossier(
        dateId: string,
        params : any
    ) : Promise<AxiosResponse<PassageCommissionDossier>>
    {
        const pathVariable = { 'date_id': (new String(dateId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dates_passage_commission/{date_id}/ordre_du_jour'),
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Reprogrammation d'une date de passage en commission. Cette opération permet de reprogrammer une date de passage en commission. La date de début et la date de fin du passage en commission programmée sont modifiées. Si des dossier sont déjà associés à cette date de passage en commission, alors ces dossiers devront être reprogrammés car l'ordre du jour sera réinitialisé.
     */
    postReprogrammerDate(
        dateId: string,
        params : any
    ) : Promise<AxiosResponse<PassageCommission>>
    {
        const pathVariable = { 'date_id': (new String(dateId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dates_passage_commission/{date_id}/reprogrammer'),
            body: Utils.payloadFilter(params)
        });
    }
    
}
