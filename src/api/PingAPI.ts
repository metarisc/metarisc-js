import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";

export class PingAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
}
