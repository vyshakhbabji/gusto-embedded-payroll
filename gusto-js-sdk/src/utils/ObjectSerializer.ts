/*
 Class for serializing and deserializing objects to and from JSON
 */

const supportedMediaTypes: { [mediaType: string]: number } = {
    "application/json": Infinity,
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
}


export class ObjectSerializer {
    public static serialize(obj: any): string {
        return JSON.stringify(obj);
    }

    public static deserialize(str: string): any {
        return JSON.parse(str);
    }

    public static parse(str: string, type: string | undefined): any {
        if (type === "string") {
            return str;
        } else if (type === "object") {
            return JSON.parse(str);
        } else if (type === "boolean") {
            return str === "true";
        } else if (type === "number") {
            return Number(str);
        } else if (type === "Date") {
            return new Date(str);
        } else {
            return str;
        }
    }

    public static serializeObject(obj: any): string {
        return JSON.stringify(obj);
    }

    public static deserializeObject(str: string, type: string): any {
        if (type === "string") {
            return str;
        } else if (type === "object") {
            return JSON.parse(str);
        } else if (type === "boolean") {
            return str === "true";
        } else if (type === "number") {
            return Number(str);
        } else if (type === "Date") {
            return new Date(str);
        } else {
            return str;
        }
    }

    public static serializeArray(obj: any): string {
        return JSON.stringify(obj);
    }

    public static deserializeArray(str: string, type: string): any {
        if (type === "string") {
            return str;
        } else if (type === "object") {
            return JSON.parse(str);
        } else if (type === "boolean") {
            return str === "true";
        } else if (type === "number") {
            return Number(str);
        } else if (type === "Date") {
            return new Date(str);
        } else {
            return str;
        }
    }

    public static serializeDate(obj: any): string {
        return obj.toISOString();
    }

    public static deserializeDate(str: string, type: string): any {
        if (type === "string") {
            return str;
        } else if (type === "object") {
            return JSON.parse(str);
        } else if (type === "boolean") {
            return str === "true";
        } else if (type === "number") {
            return Number(str);
        } else if (type === "Date") {
            return new Date(str);
        } else {
            return str;
        }
    }

    public static serializeBoolean(obj: any): string {
        return obj.toString();
    }

    public static deserializeBoolean(str: string, type: string): any {
        if (type === "string") {
            return str;
        } else if (type === "object") {
            return JSON.parse(str);
        } else if (type === "boolean") {
            return str === "true";
        } else if (type === "number") {
            return Number(str);
        } else if (type === "Date") {
            return new Date(str);
        } else {
            return str;
        }
    }

    public static serializeNumber(obj: any): string {
        return obj.toString();
    }

    public static deserializeNumber(str: string, type: string): any {
        if (type === "string") {
            return str;
        } else if (type === "object") {
            return JSON.parse(str);
        } else if (type === "boolean") {
            return str === "true";
        } else if (type === "number") {
            return Number(str);
        } else if (type === "Date") {
            return new Date(str);
        } else {
            return str;
        }
    }


    public static serializeNull(obj: any): string {
        return "null";
    }

    public static deserializeNull(str: string, type: string): any {
        if (type === "string") {
            return str;
        } else if (type === "object") {
            return JSON.parse(str);
        } else if (type === "boolean") {
            return str === "true";
        } else if (type === "number") {
            return Number(str);
        } else if (type === "Date") {
            return new Date(str);
        } else {
            return str;
        }
    }

    public static serializeUndefined(obj: any): string {
        return "undefined";
    }

    public static deserializeUndefined(str: string, type: string): any {
        if (type === "string") {
            return str;
        } else if (type === "object") {
            return JSON.parse(str);
        } else if (type === "boolean") {
            return str === "true";
        } else if (type === "number") {
            return Number(str);
        } else if (type === "Date") {
            return new Date(str);
        } else {
            return str;
        }
    }

    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }


}

