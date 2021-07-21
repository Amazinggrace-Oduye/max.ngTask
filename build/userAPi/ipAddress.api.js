"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var httpmethods_api_1 = __importDefault(require("./httpmethods.api"));
exports.default = {
    getUserPublicAddress: function () {
        try {
            return httpmethods_api_1.default({
                url: "https://ipapi.co/json/",
                method: "GET",
            });
        }
        catch (error) {
            console.log(error);
        }
    },
};
