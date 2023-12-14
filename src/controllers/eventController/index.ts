import Event from "../../models/event.model.js";

import { Request, Response } from "express";

export class EventController {
  static async createEvent(req: Request, res: Response): Promise<Response> {
    try {
      const newEvent = req.body;
      const event = new Event(newEvent);
      await event.save();
      return res.status(200).json({ event: event });
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}
