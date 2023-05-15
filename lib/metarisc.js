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
    async *autoPagingIterator(config) {
        let current_page = config.params && 'page' in config.params ? parseInt(config.params['page'].toString()) : 1;
        let per_page = config.params && 'per_page' in config.params ? parseInt(config.params['per_page'].toString()) : 25;
        while (true) {
            const response = await this.request({ ...config, ...{ params: { page: current_page.toString(), per_page: per_page.toString() } } });
            for (let element of response.data.data) {
                yield element;
            }
            if (response.data.meta.pagination.current_page === response.data.meta.pagination.total_pages) {
                break;
            }
            current_page++;
        }
    }
}
exports.Metarisc = Metarisc;
