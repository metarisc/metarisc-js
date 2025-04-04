// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { PassageCommissionDossier } from '../model/PassageCommissionDossier';

export class OrdresDuJourAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression du dossier de l'ordre du jour d'une date de passage en commission.
     */
    deleteCommissionDateDossier(
        dossierId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/ordres_du_jour/{dossier_id}')
        });
    }
    
    /**
     * L'export du compte rendu résume le contenu du passage en commission de sécurité. Il précise notamment la position individuelle de chaque membre.  Etabli à l’issue de la réunion, il est signé du président de séance, approuvé par les membres et conservé au dossier par le SDIS. Le PDF généré est un document de synthèse qui reprend les informations de la commission, en se basant sur le modèle de rapport de l'organisation. La génération du PDF est une opération qui peut être longue, en fonction de la taille et du nombre d'éléments à exporter.
     */
    getCompteRenduPdfDossier(
        dossierId: string
    ) : Promise<AxiosResponse<Blob>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            responseType: 'blob',
            endpoint: Utils.constructPath(pathVariable, '/ordres_du_jour/{dossier_id}/compte_rendu_pdf')
        });
    }
    
    /**
     * Le procès verbal est le document officiel de la commission de sécurité remis à l’autorité de police compétente. Il contient l’avis unique prononcé, exprimant la position collégiale de la commission. Le PDF généré est un document de synthèse qui reprend les informations de la commission, en se basant sur le modèle de rapport de l'organisation. La génération du PDF est une opération qui peut être longue, en fonction de la taille et du nombre d'éléments à exporter.
     */
    getProcesVerbalPdfDossier(
        dossierId: string
    ) : Promise<AxiosResponse<Blob>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            responseType: 'blob',
            endpoint: Utils.constructPath(pathVariable, '/ordres_du_jour/{dossier_id}/proces_verbal_pdf')
        });
    }
    
    /**
     * Mise à jour des détails d'un dossier lié à une date de passage en commission en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    updateCommissionDateDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<PassageCommissionDossier>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/ordres_du_jour/{dossier_id}'),
            body: Utils.payloadFilter(params)
        });
    }
    
}
