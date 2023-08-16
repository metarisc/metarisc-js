import { Core, MetariscConfig } from "./core";


import { DossiersAPI } from './api/DossiersAPI';

import { NotificationsAPI } from './api/NotificationsAPI';

import { OrganisationAPI } from './api/OrganisationAPI';

import { POIAPI } from './api/POIAPI';

import { PingAPI } from './api/PingAPI';

import { ResumableFileUploadsAPI } from './api/ResumableFileUploadsAPI';

import { UtilisateursAPI } from './api/UtilisateursAPI';

import { WFSAPI } from './api/WFSAPI';


export class Metarisc extends Core
{
    constructor(config : MetariscConfig)
    {
        super(config);

        return new Proxy(this, {
            get: function(metarisc, name) {
                switch(name) {
                    case 'DossiersAPI':
                        return new DossiersAPI(config);
                    case 'NotificationsAPI':
                        return new NotificationsAPI(config);
                    case 'OrganisationAPI':
                        return new OrganisationAPI(config);
                    case 'POIAPI':
                        return new POIAPI(config);
                    case 'PingAPI':
                        return new PingAPI(config);
                    case 'ResumableFileUploadsAPI':
                        return new ResumableFileUploadsAPI(config);
                    case 'UtilisateursAPI':
                        return new UtilisateursAPI(config);
                    case 'WFSAPI':
                        return new WFSAPI(config);
                    
                    default:
                        return;
                }
            }
        });
    }
}