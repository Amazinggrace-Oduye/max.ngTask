import {dbConfig} from "./dbConfig";
import mysql from "mysql2";

let connection = mysql.createPool(dbConfig);

export default connection;
