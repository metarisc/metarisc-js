import { Core, MetariscConfig } from "./core";

import { DossiersAPI } from "./apis/DossiersAPI";

import { NotificationsAPI } from "./apis/NotificationsAPI";

import { OrganisationAPI } from "./apis/OrganisationAPI";

import { POIAPI } from "./apis/POIAPI";

import { PingAPI } from "./apis/PingAPI";

import { ResumableFileUploadsAPI } from "./apis/ResumableFileUploadsAPI";

import { UtilisateursAPI } from "./apis/UtilisateursAPI";

import { WFSAPI } from "./apis/WFSAPI";

export class Metarisc extends Core {
  constructor(config: MetariscConfig) {
    super(config);

    return new Proxy(this, {
      get: function (metarisc, name) {
        switch (name) {
          case "DossiersAPI":
            return new DossiersAPI(config);
          case "NotificationsAPI":
            return new NotificationsAPI(config);
          case "OrganisationAPI":
            return new OrganisationAPI(config);
          case "POIAPI":
            return new POIAPI(config);
          case "PingAPI":
            return new PingAPI(config);
          case "ResumableFileUploadsAPI":
            return new ResumableFileUploadsAPI(config);
          case "UtilisateursAPI":
            return new UtilisateursAPI(config);
          case "WFSAPI":
            return new WFSAPI(config);

          default:
            return;
        }
      },
    });
  }
}
