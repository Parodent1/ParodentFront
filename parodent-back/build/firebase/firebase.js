"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const serviceAccountPath = path_1.default.resolve(__dirname, '..', process.env.FIREBASE_KEY || '');
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(require(serviceAccountPath)),
});
const db = firebase_admin_1.default.firestore();
exports.default = db;
