//create SDK class
import Platform from "./platform/Platform";

export enum Server {
    Sandbox = 'https://api.gusto-demo.com',
    Production = 'https://api.gusto.com'
}

export class SDKOptions {
    GustoToken?: string;
    Server?: string;
    GustoClientID?: string;
    GustoClientSecret?: string;
}

export class SDK {
    //constructor to set Gusto Token
    private _GustoToken?: string;
    private _platform: Platform;
    private _GustoClientId?: string;
    private _GustoClientSecret?: string;

    public constructor(options: SDKOptions) {
        this._GustoToken = options.GustoToken;
        this._GustoClientId = options.GustoClientID;
        this._GustoClientSecret = options.GustoClientSecret;
        this._platform = new Platform({options: options});
    }

    public platform() {
        return this._platform;
    }
}

export default SDK;