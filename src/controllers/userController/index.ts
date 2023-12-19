import Person from "../../models/user.model.js";

import { Request, Response } from "express";
import { BaseController } from "../index.js";
import { responseHandler } from "../../decorators/response.js";

export class UserController extends BaseController {
  protected static SequelizeModel = Person;

  @responseHandler()
  static async listAdmins(req: Request, res: Response): Promise<Person[]> {
    const list = await Person.scope("admin").findAll();
    return list;
  }
  @responseHandler()
  static async listClients(req: Request, res: Response): Promise<Person[]> {
    const list = await Person.scope("client").findAll();
    return list;
  }
}
