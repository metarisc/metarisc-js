"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metarisc = void 0;
const axios_1 = require("axios");
;
class Metarisc {
    constructor() {
        this.axios = axios_1.default.create({
            baseURL: 'https://api.metarisc.fr/'
        });
    }
    async request(config) {
        return this.axios.request({
            method: config.method || 'GET',
            url: config.endpoint || '/',
            params: config.params,
            data: config.body
        });
    }
}
exports.Metarisc = Metarisc;
