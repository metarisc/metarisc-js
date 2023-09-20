import { Core, MetariscConfig } from "../core";
import Utils from "../utils";
import type { AxiosResponse } from 'axios';
import { Organisation } from '../../src/model/Organisation';

export class OrganisationAPI extends Core {
    constructor(config : MetariscConfig) {
        super(config);
    }
    
    async getOrganisation(orgId: string): Promise<AxiosResponse<Organisation>>
    {
        const pathVariable = { 'org_id': orgId };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}'),
            headers: {  },
            params: {  },
            body: {}
        });
    }
    
}
