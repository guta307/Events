import Person from "../../models/user.model.js";

import { Request, Response } from "express";

export class UserController {
  static async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const newPerson = req.body;
      const person = new Person(newPerson);
      await person.save();
      return res.status(200).json({ person: person });
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async listUsers(req: Request, res: Response): Promise<Response> {
    try {
      const list = await Person.findAll();
      return res.status(200).json(list);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async listAdmins(req: Request, res: Response): Promise<Response> {
    try {
      const list = await Person.scope("admin").findAll();
      return res.status(200).json(list);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async listClients(req: Request, res: Response): Promise<Response> {
    try {
      const list = await Person.scope("client").findAll();
      return res.status(200).json(list);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}
