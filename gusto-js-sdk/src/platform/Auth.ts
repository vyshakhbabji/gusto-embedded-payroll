import {SDKOptions} from "../SDK";

export class Auth {
    private _GustoToken?: string;

    public constructor(options: SDKOptions) {
        this._GustoToken = options.GustoToken;
    }

    _addAuthorizationHeader(headers: any) {
        headers.Authorization = "Bearer " + this._GustoToken;
    }

}