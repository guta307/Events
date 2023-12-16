import Event from "../../models/event.model.js";

import { Request, Response } from "express";
import { BaseController } from "../index.js";

export class EventController extends BaseController {
  protected static SequelizeModel = Event;
}
