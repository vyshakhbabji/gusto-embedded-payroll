//return apiResponse with header , body and status
import {ObjectSerializer} from "../utils/ObjectSerializer";
import {isCodeInRange} from "../utils/Utils";
import {ApiException} from "./APIException";

export class APIResponse {
    private options: any;

    constructor(options: any) {
        this.options = options;
    }

    public async apiResponse(response: any) {

        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange(response.status)) {
            const body = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.text(), contentType),
            );
            // @ts-ignore
            return {
                header: response.headers,
                body: JSON.stringify(body),
                status: response.status
            };

        } else {
            throw new ApiException<string | Blob | undefined>(response.status, "Error occured", await response.text(), response.headers);
        }
    }
}