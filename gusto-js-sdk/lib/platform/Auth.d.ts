import { SDKOptions } from "../SDK";
export declare class Auth {
    private _GustoToken?;
    constructor(options: SDKOptions);
    _addAuthorizationHeader(headers: any): void;
}
