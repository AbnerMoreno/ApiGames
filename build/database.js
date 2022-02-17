"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import mysql from "promise-mysql";
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
const db = mysql_1.default.createConnection(keys_1.default.database);
db.connect((err) => {
    if (err) {
        console.log('error en la conexion, code: ', err);
    }
    else {
        console.log('Base de datos conectada');
    }
});
exports.default = db;
