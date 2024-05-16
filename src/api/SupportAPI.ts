import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { PostTicketRequest } from '../model/PostTicketRequest';
import { Ticket } from '../model/Ticket';

export class SupportAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération des détails du ticket
     * @param ticketId ID du ticket
     */
    async getTicket(ticketId: string): Promise<AxiosResponse<Ticket>>
    {
        const pathVariable = { 'ticket_id': (new String(ticketId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/support/{ticket_id}'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des tickets de support.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateTickets(page?: number, perPage?: number): Collection<Ticket>
    {
        const pathVariable = {  };
        return this.collect<Ticket>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/support/'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Création d'un nouveau ticket de support.
     * @param postTicketRequest 
     */
    async postTicket(postTicketRequest?: PostTicketRequest): Promise<AxiosResponse<Ticket>>
    {
        const pathVariable = {  };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/support/'),
            headers: {  },
            params: {  },
            body: Utils.payloadFilter( { 'subject': postTicketRequest?.subject, 'description': postTicketRequest?.description } )
        });
    }
    
}
