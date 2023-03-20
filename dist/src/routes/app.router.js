"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerTemplate = void 0;
const express = require("express");
exports.routerTemplate = express.Router();
// controllers
const app_module_1 = require("../controller/app.module");
// Set the common part of the path for the routes in this router
const base = "/api";
exports.routerTemplate.get(`${base}/get-gender`, (req, res) => {
    app_module_1.appController.getGender(req, res);
});
exports.routerTemplate.get(`${base}/get-date`, (req, res) => {
    app_module_1.appController.getDate(req.query.date, res);
});
exports.routerTemplate.get(`${base}/bonus-q1`, (req, res) => {
    app_module_1.appController.bonusQ1(req.query.date, res);
});
