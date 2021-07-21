"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = void 0;
var connection_1 = __importDefault(require("./database/connection"));
var CommentModel = function () { };
exports.CommentModel = CommentModel;
CommentModel.makeComment = function (data, callback) {
    connection_1.default.query("INSERT INTO maxnd_comment SET ?", data, function (err, rows, fields) {
        if (err) {
            console.log(err);
            return callback(true, null);
        }
        else
            return callback(null, rows);
    });
};
CommentModel.findAll = function (callback) {
    connection_1.default.query("SELECT * FROM maxnd_comment ORDER BY id DESC", function (err, rows, fields) {
        if (err)
            return callback(true, null);
        else {
            return callback(null, rows);
        }
    });
};
CommentModel.findByMovie = function (id, callback) {
    connection_1.default.query("SELECT * FROM maxnd_comment WHERE movieid = ?", id, function (err, rows, fields) {
        if (err) {
            console.log(err);
            return callback(true, null);
        }
        else {
            return callback(null, rows);
        }
    });
};
