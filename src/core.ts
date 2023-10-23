import axios, { AxiosInstance, AxiosResponse } from "axios";
import axiosRetry from "axios-retry";
import { Collection } from "./collection";

interface RequestConfig {
    body ?: any;
    headers ?: {[name: string]: string | string[]};
    params ?: {[param: string]: string | string[]};
    endpoint ?: string;
    method ?: string;
}

export interface MetariscConfig {
    metarisc_url ?: string;
    headers ?: {[name: string]: string | string[]}
}

export class Core
{
    private axios : AxiosInstance;
    
    constructor(config : MetariscConfig)
    {
        this.axios = axios.create({
            baseURL: config.metarisc_url ?? 'https://api.metarisc.fr/',
            headers: config.headers ?? {}
        });

        // Axios interceptor : Retry strategy
        axiosRetry(this.axios, {
            retries: 3,
            retryDelay: axiosRetry.exponentialDelay
        });
    }

    async request<T>(config : RequestConfig) : Promise<AxiosResponse<T>>
    {
        return this.axios.request<T>({
            method: config.method || 'GET',
            url: config.endpoint || '/',
            params: config.params,
            data: config.body,
            headers: config.headers
        });
    }

    collect<T>(config : RequestConfig) : Collection<T>
    {
        return new Collection(this, {
            endpoint: config.endpoint || '/',
            params: config.params,
            headers: config.headers
        });
    }

    async * autoPagingIterator<T>(config : RequestConfig) : AsyncGenerator<T, void, unknown>
    {
        const generator = this.collect<T>(config).autoPagingIterator();

        for await (const item of generator) {
            yield item;
        }
    }
}