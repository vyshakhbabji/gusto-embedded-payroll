import {SDKOptions} from "../SDK";
import {Client} from "../http/Client";
import {APIResponse} from "../http/APIResponse";
import {Auth} from "./Auth";

export default class Platform {
    public server?: string;
    private _token?: string;
    private _options?: SDKOptions;
    private _client: Client;
    private _response?: APIResponse
    private _auth: Auth;

    public constructor({options}: { options: SDKOptions }) {
        this._token = options.GustoToken;
        this._options = options;
        this.server = options.Server;
        this._client = new Client(options);
        this._response = new APIResponse(options);
        this._auth = new Auth(options);
    }

    public buildHeaders(options: SendOptions) {
        const headers = this._client.buildHeaders(options);
        this._auth._addAuthorizationHeader(headers);
        return headers;
    }

    public createRequest(options: SendOptions = {}) {
        const pathWithQuery = this._client.urlBuilder(options.path, options.query, this.server);
        const method = options.method;
        const headers = this.buildHeaders(options);

        return new Request(pathWithQuery, {
            method,
            headers: headers,
            body: JSON.stringify(options.body),
        });
    }

    public async sendRequest(request: Request) {
        return this._client?.send(request);
    }

    public async send(options: SendOptions = {}) {
        const request = this.createRequest(options);
        return this._response?.apiResponse(await this.sendRequest(request));
    }

    public async get(path: string, query?: Map<string, any>, options?: SendOptions) {
        return this.send({method: 'GET', path, query, ...options});
    }

    public async post(path: string, query?: Map<string, any>, body?: any, options?: SendOptions) {
        return this.send({method: 'POST', path, query, body, ...options});
    }

    public async put(path: string, query?: Map<string, any>, body?: any, options?: SendOptions) {
        return this.send({method: 'PUT', path, query, body, ...options});
    }

    public async delete(path: string, query?: Map<string, any>, options?: SendOptions) {
        return this.send({method: 'DELETE', path, query, ...options});
    }

    public async patch(path: string, query?: Map<string, any>, body?: any, options?: SendOptions) {
        return this.send({method: 'PATCH', path, query, body, ...options});
    }
}

export interface SendOptions {
    path?: any;
    body?: any;
    method?: string;
    query?: any;
    headers?: any;
    userAgent?: string;
}

