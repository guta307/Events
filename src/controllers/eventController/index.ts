import Event from "../../models/event.model.js";
import { BaseController } from "../index.js";

export class EventController extends BaseController {
  protected static SequelizeModel = Event;
}
