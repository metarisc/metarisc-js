import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Contact } from '../model/Contact';

export class ContactsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'une fiche contact existante.
     */
    async deleteContact(contactId: string ): Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'contact_id': (new String(contactId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/contacts/{contact_id}'),
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération d'une fiche contact.
     */
    async getContact(contactId: string ): Promise<AxiosResponse<Contact>>
    {
        const pathVariable = { 'contact_id': (new String(contactId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/contacts/{contact_id}'),
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des contacts.
     */
    paginateContacts(page?: number, perPage?: number ): Collection<Contact>
    {
        const pathVariable = {  };
        return this.collect<Contact>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/contacts'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Mise à jour d'une fiche contact existante.
     */
    async updateContact(contactId: string, contact?: Contact): Promise<AxiosResponse<Contact>>
    {
        const pathVariable = { 'contact_id': (new String(contactId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/contacts/{contact_id}'),
            params: {  },
            body: Utils.payloadFilter( { 'id': contact?.id, 'nom': contact?.nom, 'prenom': contact?.prenom, 'fonction': contact?.fonction, 'telephone_fixe': contact?.telephone_fixe, 'telephone_portable': contact?.telephone_portable, 'telephone_fax': contact?.telephone_fax, 'adresse': contact?.adresse, 'site_web_url': contact?.site_web_url, 'civilite': contact?.civilite, 'societe': contact?.societe, 'email': contact?.email, 'observations': contact?.observations } )
        });
    }
    
}
