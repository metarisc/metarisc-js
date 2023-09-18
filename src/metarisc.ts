import { Core, MetariscConfig } from "./core";

import { DossiersAPI } from "./api/DossiersAPI";

import { NotificationsAPI } from "./api/NotificationsAPI";

import { OrganisationAPI } from "./api/OrganisationAPI";

import { POIAPI } from "./api/POIAPI";

import { PingAPI } from "./api/PingAPI";

import { SupportAPI } from "./api/SupportAPI";

import { UtilisateursAPI } from "./api/UtilisateursAPI";

export class Metarisc extends Core {
  constructor(config: MetariscConfig) {
    super(config);

    return new Proxy(this, {
      get: function (metarisc, name) {
        switch (name) {
          case "dossiers":
            return new DossiersAPI(config);
          case "notifications":
            return new NotificationsAPI(config);
          case "organisations":
            return new OrganisationAPI(config);
          case "poi":
            return new POIAPI(config);
          case "ping":
            return new PingAPI(config);
          case "support":
            return new SupportAPI(config);
          case "utilisateurs":
            return new UtilisateursAPI(config);
          default:
            return;
        }
      },
    });
  }
}
