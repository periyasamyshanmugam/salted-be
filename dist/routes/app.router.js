"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerTemplate = void 0;
const express = require("express");
exports.routerTemplate = express.Router();
// controllers
const app_controller_1 = require("../controller/app.controller");
// Set the common part of the path for the routes in this router
const base = "/example-path";
//Routes
// routerTemplate.post(`${base}`, (req, res) => {
//   AppController.createFunction(req, res);
// });
// routerTemplate.put(`${base}/:id`, (req, res) => {
//   AppController.putFunction(req, res);
// });
// routerTemplate.delete(`${base}/:id`, (req, res) => {
//   AppController.deleteById(res, req.params.id);
// });
exports.routerTemplate.get(`${base}`, (req, res) => {
    app_controller_1.AppController.findById(res, req.params.id);
});
