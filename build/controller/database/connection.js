"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dbConfig_1 = require("./dbConfig");
var mysql2_1 = __importDefault(require("mysql2"));
var connection = mysql2_1.default.createPool(dbConfig_1.dbConfig);
exports.default = connection;
