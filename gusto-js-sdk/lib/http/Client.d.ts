import { SendOptions } from "../platform/Platform";
export interface Headers {
    [key: string]: string;
}
declare class ApiError {
    code: number;
    message: string;
    body: any;
    headers: any;
    originalMessage?: string;
    response?: Response;
    request?: Request;
    constructor(code: number, message: string, body: any, headers: any);
}
export declare enum events {
    beforeRequest = "beforeRequest",
    requestSuccess = "requestSuccess",
    requestError = "requestError"
}
export declare class Client {
    constructor(options: any);
    urlBuilder(path: string, query: Map<string, any>, server?: string): any;
    buildHeaders(options: SendOptions): Headers;
    _loadResponse(request: Request): Promise<Response>;
    send(request: Request): Promise<Response>;
    getContentType(response: Response): string;
    getStatus(response: Response): number;
    getBody(response: Response): Promise<any>;
    getHeaders(response: Response): globalThis.Headers;
    getError(response: Response): Promise<any>;
    getErrorMessage(response: Response): Promise<any>;
    error(response: Response, skipOKCheck?: boolean): Promise<ApiError>;
}
export {};
