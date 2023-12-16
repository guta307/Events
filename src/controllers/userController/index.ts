import Person from "../../models/user.model.js";

import { Request, Response } from "express";
import { BaseController } from "../index.js";

export class UserController extends BaseController {
  protected static SequelizeModel = Person;

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
