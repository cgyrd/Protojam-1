"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql2_1 = __importDefault(require("mysql2"));
var dotenv_1 = __importDefault(require("dotenv"));
// Charge les variables d'environnement depuis le fichier .env
dotenv_1.default.config();
var connection = mysql2_1.default.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
connection.connect(function (err) {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database');
});
// Libère la connexion
connection.end();
