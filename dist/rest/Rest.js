"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rest = void 0;
const DiscordConstants_1 = require("../utils/DiscordConstants");
const DistypeConstants_1 = require("../utils/DistypeConstants");
const RestRequests_1 = require("./RestRequests");
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
/**
 * The rest manager.
 * Used for making rest requests to the Discord API.
 */
class Rest extends RestRequests_1.RestRequests {
    /**
     * Create a rest manager.
     * @param token The bot's token.
     * @param options Rest options.
     */
    constructor(token, options) {
        super();
        if (typeof token !== `string`)
            throw new TypeError(`A bot token must be specified`);
        Object.defineProperty(this, `_token`, {
            configurable: false,
            enumerable: false,
            value: token,
            writable: false
        });
        Object.defineProperty(this, `options`, {
            configurable: false,
            enumerable: true,
            value: Object.freeze(options),
            writable: false
        });
    }
    async request(method, route, options) {
        return (await this._make(method, route, options)).data;
    }
    async _make(method, route, options = {}) {
        const usingFormData = options.data instanceof form_data_1.default;
        const headers = {
            ...options.headers,
            ...(usingFormData ? options.data?.getHeaders() : undefined),
            'Authorization': `Bot ${this._token}`,
            'User-Agent': `DiscordBot (${DistypeConstants_1.DistypeConstants.URL}, v${DistypeConstants_1.DistypeConstants.VERSION})`
        };
        if (!usingFormData && options.data)
            headers[`Content-Type`] = `application/json`;
        if (options.reason)
            headers[`X-Audit-Log-Reason`] = options.reason;
        return await (0, axios_1.default)({
            ...this.options,
            ...options,
            data: usingFormData ? options.data : options.data,
            baseURL: `${DiscordConstants_1.DiscordConstants.BASE_URL}/v${(options.version ?? this.options.version) ?? DiscordConstants_1.DiscordConstants.DEFAULT_REST_VERSION}`,
            url: route,
            method,
            headers
        });
    }
}
exports.Rest = Rest;
