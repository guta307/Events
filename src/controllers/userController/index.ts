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

  static async findUser(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const list = await Person.findOne({ where: data });
      return res.status(200).json(list);
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

  static async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const newData = req.body;
      await Person.update(newData, { where: { id: Number(id) } });
      const person = await Person.findByPk(id);
      return res.status(200).json(person);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await Person.destroy({ where: { id: Number(id) } });
      const person = await Person.findByPk(id);
      return res
        .status(200)
        .json({ response: `O user de id ${id} foi deletado com sucesso` });
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}
