import { Core, MetariscConfig } from "./core";
import { Tus } from "./tus";
import { Client } from "./client";

import { DossiersAPI } from './api/DossiersAPI';

import { EvenementsAPI } from './api/EvenementsAPI';

import { FeedAPI } from './api/FeedAPI';

import { MoiAPI } from './api/MoiAPI';

import { NotificationsAPI } from './api/NotificationsAPI';

import { OrganisationsAPI } from './api/OrganisationsAPI';

import { PEIAPI } from './api/PEIAPI';

import { PingAPI } from './api/PingAPI';

import { SupportAPI } from './api/SupportAPI';

import { UtilisateursAPI } from './api/UtilisateursAPI';

export class Metarisc extends Core
{
    
    public utilisateurs?: UtilisateursAPI;
    
    public feed?: FeedAPI;
    
    public dossiers?: DossiersAPI;
    
    public organisations?: OrganisationsAPI;
    
    public pei?: PEIAPI;
    
    public moi?: MoiAPI;
    
    public ping?: PingAPI;
    
    public evenements?: EvenementsAPI;
    
    public support?: SupportAPI;
    
    public notifications?: NotificationsAPI;
    
    public tus?: Tus;

    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);

        const tmpClient = this.client;

        return new Proxy(this, {
            get: function(metarisc, name, receiver) {
                switch(name) {
                    
                    case 'utilisateurs':
                        return new UtilisateursAPI(config, tmpClient);
                    
                    case 'feed':
                        return new FeedAPI(config, tmpClient);
                    
                    case 'dossiers':
                        return new DossiersAPI(config, tmpClient);
                    
                    case 'organisations':
                        return new OrganisationsAPI(config, tmpClient);
                    
                    case 'pei':
                        return new PEIAPI(config, tmpClient);
                    
                    case 'moi':
                        return new MoiAPI(config, tmpClient);
                    
                    case 'ping':
                        return new PingAPI(config, tmpClient);
                    
                    case 'evenements':
                        return new EvenementsAPI(config, tmpClient);
                    
                    case 'support':
                        return new SupportAPI(config, tmpClient);
                    
                    case 'notifications':
                        return new NotificationsAPI(config, tmpClient);
                    
                    case 'tus':
                        return new Tus(config, tmpClient);
                    default:
                        return Reflect.get(metarisc, name, receiver);
                }
            }
        });
    }
}