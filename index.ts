import express, { Express, Request, Response } from "express";

import dotenv from "dotenv";
import { routerTemplate } from "./src/routes/app.router";
const cors = require("cors");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(cors());

app.get("/api/*", routerTemplate);

var corsOptions = { origin: "http://localhost:4200" };

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
