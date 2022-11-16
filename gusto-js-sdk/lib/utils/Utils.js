"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlBuilder = exports.isCodeInRange = void 0;
function isCodeInRange(code) {
    return code >= 200 && code < 300;
}
exports.isCodeInRange = isCodeInRange;
function urlBuilder(path, params, query) {
    var url = path;
    if (params) {
        url = url.replace(/\{([^}]+)\}/g, function (match, key) {
            return params[key];
        });
    }
    if (query) {
        url += "?";
        url += Object.keys(query)
            .map(function (key) { return key + "=" + query[key]; })
            .join("&");
    }
    return url;
}
exports.urlBuilder = urlBuilder;
//# sourceMappingURL=Utils.js.map