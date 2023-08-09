import { Core, MetariscConfig } from "./core";

export class Metarisc extends Core
{
    constructor(config : MetariscConfig)
    {
        super(config);

        return new Proxy(this, {
            get: function(metarisc, name) {
                switch(name) {
                    default:
                        return;
                }
            }
        });
    }
}