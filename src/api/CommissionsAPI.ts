import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import { Client } from "../client";
import { Collection } from "../collection";
import { Commission } from '../model/Commission';
import { PassageCommission } from '../model/PassageCommission';

export class CommissionsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération des détails de la commission.
     * @param commissionId Identifiant unique de la commission
     */
    getCommission(commissionId: string): Collection<Commission>
    {
        const pathVariable = { 'commission_id': commissionId };
        return this.collect<Commission>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Récupération de la liste des dates de passage de la commission.
     * @param commissionId Identifiant unique de la commission
     */
    paginateCommissionDates(commissionId: string): Collection<PassageCommission>
    {
        const pathVariable = { 'commission_id': commissionId };
        return this.collect<PassageCommission>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dates'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
    /**
     * Liste des commissions.
     */
    paginateCommissions(): Collection<Commission>
    {
        const pathVariable = {  };
        return this.collect<Commission>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
}
