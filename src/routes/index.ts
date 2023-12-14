import express, { Application } from "express";
import userRoute from "./userRoute.js";
import eventRoute from "./eventRoute.js";
import bodyParser from "body-parser";

const routes = (app: Application): void => {
  app.use(bodyParser.json());
  app.use(userRoute, eventRoute);
  app.get("/", (req, res) => res.status(200).send("Olá"));
};

export default routes;
