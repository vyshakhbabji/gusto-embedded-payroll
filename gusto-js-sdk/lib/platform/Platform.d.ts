import { SDKOptions } from "../SDK";
export default class Platform {
    server?: string;
    private _token?;
    private _options?;
    private _client;
    private _response?;
    private _auth;
    constructor({ options }: {
        options: SDKOptions;
    });
    buildHeaders(options: SendOptions): import("../http/Client").Headers;
    createRequest(options?: SendOptions): Request;
    sendRequest(request: Request): Promise<Response>;
    send(options?: SendOptions): Promise<{
        header: any;
        body: string;
        status: any;
    }>;
    get(path: string, query?: Map<string, any>, options?: SendOptions): Promise<{
        header: any;
        body: string;
        status: any;
    }>;
    post(path: string, query?: Map<string, any>, body?: any, options?: SendOptions): Promise<{
        header: any;
        body: string;
        status: any;
    }>;
    put(path: string, query?: Map<string, any>, body?: any, options?: SendOptions): Promise<{
        header: any;
        body: string;
        status: any;
    }>;
    delete(path: string, query?: Map<string, any>, options?: SendOptions): Promise<{
        header: any;
        body: string;
        status: any;
    }>;
    patch(path: string, query?: Map<string, any>, body?: any, options?: SendOptions): Promise<{
        header: any;
        body: string;
        status: any;
    }>;
}
export interface SendOptions {
    path?: any;
    body?: any;
    method?: string;
    query?: any;
    headers?: any;
    userAgent?: string;
}
