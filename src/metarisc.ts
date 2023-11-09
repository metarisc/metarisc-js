import { Core, MetariscConfig } from "./core";
import { Tus } from "./tus";
import { Client } from "./client";

import { DossiersAPI } from './api/DossiersAPI';

import { EvenementsAPI } from './api/EvenementsAPI';

import { NotificationsAPI } from './api/NotificationsAPI';

import { OrganisationAPI } from './api/OrganisationAPI';

import { POIAPI } from './api/POIAPI';

import { PingAPI } from './api/PingAPI';

import { SupportAPI } from './api/SupportAPI';

import { UtilisateursAPI } from './api/UtilisateursAPI';

export class Metarisc extends Core
{
    
    public dossiers?: DossiersAPI;
    
    public evenements?: EvenementsAPI;
    
    public notifications?: NotificationsAPI;
    
    public organisations?: OrganisationAPI;
    
    public poi?: POIAPI;
    
    public ping?: PingAPI;
    
    public support?: SupportAPI;
    
    public utilisateurs?: UtilisateursAPI;
    
    public tus?: Tus;

    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);

        const tmpClient = this.client;

        return new Proxy(this, {
            get: function(metarisc, name, receiver) {
                switch(name) {
                    
                    case 'dossiers':
                        return new DossiersAPI(config, tmpClient);
                    
                    case 'evenements':
                        return new EvenementsAPI(config, tmpClient);
                    
                    case 'notifications':
                        return new NotificationsAPI(config, tmpClient);
                    
                    case 'organisations':
                        return new OrganisationAPI(config, tmpClient);
                    
                    case 'poi':
                        return new POIAPI(config, tmpClient);
                    
                    case 'ping':
                        return new PingAPI(config, tmpClient);
                    
                    case 'support':
                        return new SupportAPI(config, tmpClient);
                    
                    case 'utilisateurs':
                        return new UtilisateursAPI(config, tmpClient);
                    
                    case 'tus':
                        return new Tus(config, tmpClient);
                    default:
                        return Reflect.get(metarisc, name, receiver);
                }
            }
        });
    }
}