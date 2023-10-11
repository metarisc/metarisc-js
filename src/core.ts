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
        let current_page : number = config.params && 'page' in config.params ? parseInt(config.params['page'].toString()) : 1;
        const per_page : number = config.params && 'per_page' in  config.params ? parseInt(config.params['per_page'].toString()) : 25;

        while (true) {
            const response = <AxiosResponse<{
                data?: Array<T>;
                meta?: {
                    pagination?: {
                        total?: number;
                        count?: number;
                        per_page?: number;
                        current_page?: number;
                        total_pages?: number;
                      };
                };
                }>> await this.request({...config, ...{params: {page: current_page.toString(), per_page: per_page.toString()}}});

            for (const element of response.data.data) {
                yield element;
            }

            if (response.data.meta.pagination.current_page === response.data.meta.pagination.total_pages) {
                break;
            }

            current_page++;
        }
    }
}