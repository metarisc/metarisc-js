import { Core, MetariscConfig } from "../core";
import { Client } from "../client";

export class PingAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
}