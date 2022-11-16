// import {HttpClient} from "../client/HttpClient";
// import Externals from "../core/Externals";
import {SendOptions} from "../platform/Platform";

export interface Headers {
    [key: string]: string;
}

class ApiError {
    originalMessage?: string;
    response?: Response;
    request?: Request;

    constructor(public code: number, public message: string, public body: any, public headers: any) {
        this.originalMessage = message;

        if (body) {
            this.message = `${message} - ${JSON.stringify(body)}`;
        }

        if (headers) {
            this.message = `${message} - ${JSON.stringify(headers)}`;

        }

        if (this.response) {
            this.message = `${message} - ${this.response.statusText}`;

        }

        if (this.request) {
            this.message = `${message} - ${this.request.method} ${this.request.url}`;

        }

    }
}

export enum events {
    beforeRequest = 'beforeRequest',
    requestSuccess = 'requestSuccess',
    requestError = 'requestError',
}

export class Client {
    // public events = events;
    // private _externals: Externals;

    constructor(options: any) {
        // super();
        //...other stuff
        // this._externals = options.externals
    }

    public urlBuilder(path: string, query: Map<string, any>, server?: string) {
        var url;
        // if url is absolute, add query to it
        if (path.startsWith('http')) {
             url = new URL(path);
        }
        else {
             url = new URL(path, server);
        }
        if (query) {
            Object.keys(query).forEach(key => {
                url.searchParams.append(key, query[key]);
            });
        }
        return url.toString();
    }


    public buildHeaders(options: SendOptions) {
        const headers: Headers = {};
        if (options.headers) {
            Object.keys(options.headers).forEach(key => {
                headers[key] = options.headers[key];
            });
        }
        if (headers['Accept'] === undefined) {
            headers['Accept'] = 'application/json';
        }
        return headers;
    }

    public async _loadResponse(request: Request): Promise<Response> {
        // return this._externals.fetch.call(request);
        return fetch(request);
    }

    async send(request: Request) {
        return this._loadResponse(request);
    }

    public getContentType(response: Response) {
        return response.headers.get("Content-Type");
    }

    public getStatus(response: Response) {
        return response.status;
    }

    public getBody(response: Response) {
        return response.json();
    }

    public getHeaders(response: Response) {
        return response.headers;
    }

    public getError(response: Response) {
        return response.json().then(body => {
            return body.error;
        });
    }

    public getErrorMessage(response: Response) {
        return response.json().then(body => {
            return body.error_message;
        });
    }

    // public isContentType(contentType: string, response: Response) {
    //     return response.headers.get("Content-Type").includes(contentType);
    // }

    public async error(response: Response, skipOKCheck: boolean = false) {
        if (response.ok && !skipOKCheck) return null;

        let msg = (response.status ? `${response.status} ` : '') + (response.statusText ? response.statusText : '');

        try {
            const {message, error_description, description} = await response.clone().json();

            if (message) msg = message;
            if (error_description) msg = error_description;
            if (description) msg = description;
        } catch (e) {
        } finally {
            return new ApiError(response.status, msg, null, response.headers);
        }
    }

    // public on(event: events.beforeRequest, listener: (request: Request) => void);
    // public on(event: events.requestSuccess, listener: (response: Response, request: Request) => void);
    // public on(event: events.requestError, listener: (error: ApiError) => void);
    // public on(event: string, listener: (...args) => void) {
    //     return super.on(event, listener);
    // }

}
