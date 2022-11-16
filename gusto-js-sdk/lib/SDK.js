"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.SDKOptions = exports.Server = void 0;
//create SDK class
var Platform_1 = __importDefault(require("./platform/Platform"));
var Server;
(function (Server) {
    Server["Sandbox"] = "https://api.gusto-demo.com";
    Server["Production"] = "https://api.gusto.com";
})(Server = exports.Server || (exports.Server = {}));
var SDKOptions = /** @class */ (function () {
    function SDKOptions() {
    }
    return SDKOptions;
}());
exports.SDKOptions = SDKOptions;
var SDK = /** @class */ (function () {
    function SDK(options) {
        this._GustoToken = options.GustoToken;
        this._GustoClientId = options.GustoClientID;
        this._GustoClientSecret = options.GustoClientSecret;
        this._platform = new Platform_1.default({ options: options });
    }
    SDK.prototype.platform = function () {
        return this._platform;
    };
    return SDK;
}());
exports.SDK = SDK;
exports.default = SDK;
//# sourceMappingURL=SDK.js.map