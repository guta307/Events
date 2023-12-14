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

  static async listEvents(req: Request, res: Response): Promise<Response> {
    try {
      const list = await Event.findAll();
      return res.status(200).json(list);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async findEvent(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const list = await Event.findOne({ where: data });
      return res.status(200).json(list);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async updateEvent(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const newData = req.body;
      await Event.update(newData, { where: { id: Number(id) } });
      const event = await Event.findByPk(id);
      return res.status(200).json(event);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async deleteEvent(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await Event.destroy({ where: { id: Number(id) } });
      const person = await Event.findByPk(id);
      return res
        .status(200)
        .json({ response: `O evento de id ${id} foi deletado com sucesso` });
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}
