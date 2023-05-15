import axios, { AxiosInstance, AxiosResponse } from "axios";

interface RequestConfig {
    body ?: any,
    headers ?: string | {[name: string]: string | string[]},
    params ?: {[param: string]: string | string[]},
    endpoint ?: string,
    method ?: string
};

export class Metarisc
{
    private axios : AxiosInstance;

    constructor()
    {
        this.axios = axios.create({
            baseURL: 'https://api.metarisc.fr/'
        });
    }

    async request<T>(config : RequestConfig) : Promise<AxiosResponse<T>>
    {
        return this.axios.request<T>({
            method: config.method || 'GET',
            url: config.endpoint || '/',
            params: config.params,
            data: config.body
        });
    }
}