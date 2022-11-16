"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
var Auth = /** @class */ (function () {
    function Auth(options) {
        this._GustoToken = options.GustoToken;
    }
    Auth.prototype._addAuthorizationHeader = function (headers) {
        headers.Authorization = "Bearer " + this._GustoToken;
    };
    return Auth;
}());
exports.Auth = Auth;
//# sourceMappingURL=Auth.js.map