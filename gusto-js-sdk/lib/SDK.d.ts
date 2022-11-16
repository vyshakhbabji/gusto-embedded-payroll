import Platform from "./platform/Platform";
export declare enum Server {
    Sandbox = "https://api.gusto-demo.com",
    Production = "https://api.gusto.com"
}
export declare class SDKOptions {
    GustoToken?: string;
    Server?: string;
    GustoClientID?: string;
    GustoClientSecret?: string;
}
export declare class SDK {
    private _GustoToken?;
    private _platform;
    private _GustoClientId?;
    private _GustoClientSecret?;
    constructor(options: SDKOptions);
    platform(): Platform;
}
export default SDK;
