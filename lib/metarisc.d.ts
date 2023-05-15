import { AxiosResponse } from "axios";
interface RequestConfig {
    body?: any;
    headers?: string | {
        [name: string]: string | string[];
    };
    params?: {
        [param: string]: string | string[];
    };
    endpoint?: string;
    method?: string;
}
export declare class Metarisc {
    private axios;
    constructor();
    request<T>(config: RequestConfig): Promise<AxiosResponse<T>>;
}
export {};
