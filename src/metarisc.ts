import { Core, MetariscConfig } from "./core";
import { Tus } from "./tus";
import { Client } from "./client";

import { AnomaliesAPI } from './api/AnomaliesAPI';

import { CommissionsAPI } from './api/CommissionsAPI';

import { ContactsAPI } from './api/ContactsAPI';

import { DocumentsAPI } from './api/DocumentsAPI';

import { DossiersAPI } from './api/DossiersAPI';

import { ERPAPI } from './api/ERPAPI';

import { EvenementsAPI } from './api/EvenementsAPI';

import { FeedAPI } from './api/FeedAPI';

import { MoiAPI } from './api/MoiAPI';

import { NotificationsAPI } from './api/NotificationsAPI';

import { OrganisationsAPI } from './api/OrganisationsAPI';

import { PEIAPI } from './api/PEIAPI';

import { PingAPI } from './api/PingAPI';

import { PrescriptionsAPI } from './api/PrescriptionsAPI';

import { TournesDECIAPI } from './api/TournesDECIAPI';

import { UtilisateursAPI } from './api/UtilisateursAPI';

export class Metarisc extends Core
{
    
    public utilisateurs?: UtilisateursAPI;
    
    public erp?: ERPAPI;
    
    public dossiers?: DossiersAPI;
    
    public documents?: DocumentsAPI;
    
    public moi?: MoiAPI;
    
    public ping?: PingAPI;
    
    public anomalies?: AnomaliesAPI;
    
    public supports_reglementaires?: PrescriptionsAPI;
    
    public feed?: FeedAPI;
    
    public tournees_deci?: TournesDECIAPI;
    
    public organisations?: OrganisationsAPI;
    
    public pei?: PEIAPI;
    
    public commissions?: CommissionsAPI;
    
    public evenements?: EvenementsAPI;
    
    public prescriptions?: PrescriptionsAPI;
    
    public contacts?: ContactsAPI;
    
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
                    
                    case 'erp':
                        return new ERPAPI(config, tmpClient);
                    
                    case 'dossiers':
                        return new DossiersAPI(config, tmpClient);
                    
                    case 'documents':
                        return new DocumentsAPI(config, tmpClient);
                    
                    case 'moi':
                        return new MoiAPI(config, tmpClient);
                    
                    case 'ping':
                        return new PingAPI(config, tmpClient);
                    
                    case 'anomalies':
                        return new AnomaliesAPI(config, tmpClient);
                    
                    case 'supports_reglementaires':
                        return new PrescriptionsAPI(config, tmpClient);
                    
                    case 'feed':
                        return new FeedAPI(config, tmpClient);
                    
                    case 'tournees_deci':
                        return new TournesDECIAPI(config, tmpClient);
                    
                    case 'organisations':
                        return new OrganisationsAPI(config, tmpClient);
                    
                    case 'pei':
                        return new PEIAPI(config, tmpClient);
                    
                    case 'commissions':
                        return new CommissionsAPI(config, tmpClient);
                    
                    case 'evenements':
                        return new EvenementsAPI(config, tmpClient);
                    
                    case 'prescriptions':
                        return new PrescriptionsAPI(config, tmpClient);
                    
                    case 'contacts':
                        return new ContactsAPI(config, tmpClient);
                    
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