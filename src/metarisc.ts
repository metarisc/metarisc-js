import { Core, MetariscConfig } from "./core";

import { DossiersAPI } from "./api/DossiersAPI";

import { EvenementsAPI } from "./api/EvenementsAPI";

import { NotificationsAPI } from "./api/NotificationsAPI";

import { OrganisationAPI } from "./api/OrganisationAPI";

import { POIAPI } from "./api/POIAPI";

import { PingAPI } from "./api/PingAPI";

import { SupportAPI } from "./api/SupportAPI";

import { UtilisateursAPI } from "./api/UtilisateursAPI";

export class Metarisc extends Core {
  public dossiers?: DossiersAPI;
  public evenements?: EvenementsAPI;
  public notifications?: NotificationsAPI;
  public organisations?: OrganisationAPI;
  public poi?: POIAPI;
  public ping?: PingAPI;
  public support?: SupportAPI;
  public utilisateurs?: UtilisateursAPI;

  constructor(config: MetariscConfig) {
    super(config);

    return new Proxy(this, {
      get: function (metarisc, name, receiver) {
        switch (name) {
          case "dossiers":
            return new DossiersAPI(config);
          case "evenements":
            return new EvenementsAPI(config);
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
            return Reflect.get(metarisc, name, receiver); // Proxy to original Metarisc service
        }
      },
    });
  }
}
