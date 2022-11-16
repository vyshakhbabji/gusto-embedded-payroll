export declare class APIResponse {
    private options;
    constructor(options: any);
    apiResponse(response: any): Promise<{
        header: any;
        body: string;
        status: any;
    }>;
}
