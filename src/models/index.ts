import "reflect-metadata";

import { Sequelize } from "sequelize-typescript";

import Person from "./user.model.js";
import Event from "./event.model.js";

import { setupRelations } from "./relations.js";

import dotenv from "dotenv";
dotenv.config();
const connectionInfo = {
  database: "login",
  username: "root",
  password: process.env.DB_PASSWORD,
  dialectOptions: {
    host: "localhost",
    port: "3306",
  },
};

export const sequelize = new Sequelize({
  dialect: "mysql",
  ...connectionInfo,
  models: [Person, Event],
  benchmark: false,
  // for logging slow queries
  logQueryParameters: true,
  logging: (sql, timing) => {
    if (timing && timing > 200) {
      console.log(sql, timing);
    }
  },
});

setupRelations();

export function syncModels() {
  const alter = true;

  Person.sync({ alter: true, logging: false });

  console.log("Syncing...");

  sequelize
    .sync({
      alter,
      //disable log when Syncing
      logging: false,
      //logging: console.log
    })
    .then(() => {
      console.log("Synced db.");
    })
    .catch((err) => {
      console.log("Failed to sync db: " + err.message);
    });
}
