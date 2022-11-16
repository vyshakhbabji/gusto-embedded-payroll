"use strict";
/*
 Class for serializing and deserializing objects to and from JSON
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
var supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
};
var ObjectSerializer = /** @class */ (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.serialize = function (obj) {
        return JSON.stringify(obj);
    };
    ObjectSerializer.deserialize = function (str) {
        return JSON.parse(str);
    };
    ObjectSerializer.parse = function (str, type) {
        if (type === "string") {
            return str;
        }
        else if (type === "object") {
            return JSON.parse(str);
        }
        else if (type === "boolean") {
            return str === "true";
        }
        else if (type === "number") {
            return Number(str);
        }
        else if (type === "Date") {
            return new Date(str);
        }
        else {
            return str;
        }
    };
    ObjectSerializer.serializeObject = function (obj) {
        return JSON.stringify(obj);
    };
    ObjectSerializer.deserializeObject = function (str, type) {
        if (type === "string") {
            return str;
        }
        else if (type === "object") {
            return JSON.parse(str);
        }
        else if (type === "boolean") {
            return str === "true";
        }
        else if (type === "number") {
            return Number(str);
        }
        else if (type === "Date") {
            return new Date(str);
        }
        else {
            return str;
        }
    };
    ObjectSerializer.serializeArray = function (obj) {
        return JSON.stringify(obj);
    };
    ObjectSerializer.deserializeArray = function (str, type) {
        if (type === "string") {
            return str;
        }
        else if (type === "object") {
            return JSON.parse(str);
        }
        else if (type === "boolean") {
            return str === "true";
        }
        else if (type === "number") {
            return Number(str);
        }
        else if (type === "Date") {
            return new Date(str);
        }
        else {
            return str;
        }
    };
    ObjectSerializer.serializeDate = function (obj) {
        return obj.toISOString();
    };
    ObjectSerializer.deserializeDate = function (str, type) {
        if (type === "string") {
            return str;
        }
        else if (type === "object") {
            return JSON.parse(str);
        }
        else if (type === "boolean") {
            return str === "true";
        }
        else if (type === "number") {
            return Number(str);
        }
        else if (type === "Date") {
            return new Date(str);
        }
        else {
            return str;
        }
    };
    ObjectSerializer.serializeBoolean = function (obj) {
        return obj.toString();
    };
    ObjectSerializer.deserializeBoolean = function (str, type) {
        if (type === "string") {
            return str;
        }
        else if (type === "object") {
            return JSON.parse(str);
        }
        else if (type === "boolean") {
            return str === "true";
        }
        else if (type === "number") {
            return Number(str);
        }
        else if (type === "Date") {
            return new Date(str);
        }
        else {
            return str;
        }
    };
    ObjectSerializer.serializeNumber = function (obj) {
        return obj.toString();
    };
    ObjectSerializer.deserializeNumber = function (str, type) {
        if (type === "string") {
            return str;
        }
        else if (type === "object") {
            return JSON.parse(str);
        }
        else if (type === "boolean") {
            return str === "true";
        }
        else if (type === "number") {
            return Number(str);
        }
        else if (type === "Date") {
            return new Date(str);
        }
        else {
            return str;
        }
    };
    ObjectSerializer.serializeNull = function (obj) {
        return "null";
    };
    ObjectSerializer.deserializeNull = function (str, type) {
        if (type === "string") {
            return str;
        }
        else if (type === "object") {
            return JSON.parse(str);
        }
        else if (type === "boolean") {
            return str === "true";
        }
        else if (type === "number") {
            return Number(str);
        }
        else if (type === "Date") {
            return new Date(str);
        }
        else {
            return str;
        }
    };
    ObjectSerializer.serializeUndefined = function (obj) {
        return "undefined";
    };
    ObjectSerializer.deserializeUndefined = function (str, type) {
        if (type === "string") {
            return str;
        }
        else if (type === "object") {
            return JSON.parse(str);
        }
        else if (type === "boolean") {
            return str === "true";
        }
        else if (type === "number") {
            return Number(str);
        }
        else if (type === "Date") {
            return new Date(str);
        }
        else {
            return str;
        }
    };
    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        var selectedMediaType = undefined;
        var selectedRank = -Infinity;
        for (var _i = 0, normalMediaTypes_1 = normalMediaTypes; _i < normalMediaTypes_1.length; _i++) {
            var mediaType = normalMediaTypes_1[_i];
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    };
    /**
     * Convert data to a string according the given media type
     */
    ObjectSerializer.stringify = function (data, mediaType) {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map