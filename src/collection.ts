import { AxiosResponse } from "axios";
import { Core } from "./core";

export type PaginationResults<T> = {
    data?: Array<T>;
    meta?: {
        pagination?: PaginationData;
    };
};

export type PaginationData = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
};

type PaginationRequestConfig = {
    headers ?: {[name: string]: string | string[]};
    params ?: {[param: string]: string | string[]};
    endpoint ?: string;
};

export class Collection<T>
{
    constructor(
        private client : Core,
        private config : PaginationRequestConfig
    ) {}

    /**
     * Fetch current page results.
     */
    async fetchPage(page : number, per_page : number) : Promise<AxiosResponse<PaginationResults<T>>>
    {
        return this.client.request({
            method: 'GET',
            endpoint: this.config.endpoint,
            headers: this.config.headers,
            params: {...this.config.params, ...{
                page: page.toString(),
                per_page: per_page.toString()
            }},  
        });
    }

    /**
     * Generates an iterator to automatically iterate over all pages in a result set.
     */
    async * autoPagingIterator() : AsyncGenerator<T, void, unknown>
    {
        let current_page : number = this.config.params && 'page' in this.config.params ? parseInt(this.config.params['page'].toString()) : 1;
        const per_page : number = this.config.params && 'per_page' in  this.config.params ? parseInt(this.config.params['per_page'].toString()) : 100;

        while (true) {
            const response = <AxiosResponse<PaginationResults<T>>> await this.fetchPage(current_page, per_page);

            for (const element of response.data.data) {
                yield element;
            }

            if (response.data.meta.pagination.current_page === response.data.meta.pagination.total_pages) {
                break;
            }

            current_page++;
        }
    }

    /**
     * Generates an array with all results set.
     */
    async autoPagingIteratorToArray() : Promise<Array<T>>
    {
        const generator = this.autoPagingIterator();
        const results = [];

        for await (const item of generator) {
            results.push(item);
        }

        return results;
    }
}