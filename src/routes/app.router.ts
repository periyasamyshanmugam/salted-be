import express = require("express");
export const routerTemplate = express.Router();

// controllers
import { appController } from "../controller/app.module";

// Set the common part of the path for the routes in this router
const base = "/api";

routerTemplate.get(`${base}/get-gender`, (req: express.Request, res: express.Response) => {
  appController.getGender(req, res);
});

routerTemplate.get(`${base}/get-date`, (req: express.Request, res: express.Response) => {
  appController.getDate(req.query.date, res);
});

routerTemplate.get(`${base}/bonus-q1`, (req: express.Request, res: express.Response) => {
  appController.bonusQ1(req.query.date, res);
});
