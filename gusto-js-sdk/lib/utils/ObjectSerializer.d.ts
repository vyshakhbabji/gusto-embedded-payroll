export declare class ObjectSerializer {
    static serialize(obj: any): string;
    static deserialize(str: string): any;
    static parse(str: string, type: string | undefined): any;
    static serializeObject(obj: any): string;
    static deserializeObject(str: string, type: string): any;
    static serializeArray(obj: any): string;
    static deserializeArray(str: string, type: string): any;
    static serializeDate(obj: any): string;
    static deserializeDate(str: string, type: string): any;
    static serializeBoolean(obj: any): string;
    static deserializeBoolean(str: string, type: string): any;
    static serializeNumber(obj: any): string;
    static deserializeNumber(str: string, type: string): any;
    static serializeNull(obj: any): string;
    static deserializeNull(str: string, type: string): any;
    static serializeUndefined(obj: any): string;
    static deserializeUndefined(str: string, type: string): any;
    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    static normalizeMediaType(mediaType: string | undefined): string | undefined;
    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    static getPreferredMediaType(mediaTypes: Array<string>): string;
    /**
     * Convert data to a string according the given media type
     */
    static stringify(data: any, mediaType: string): string;
}
