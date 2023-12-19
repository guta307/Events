import { Request, Response } from "express";
import { IModel } from "../interface/model.js";

export class BaseController {
  protected static SequelizeModel: IModel;

  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const newRegister = req.body;
      const resgister = new this.SequelizeModel(newRegister);
      await resgister.save();
      return res.status(200).json({ result: resgister });
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async find(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const list = await this.SequelizeModel.findOne({ where: data });
      return res.status(200).json(list);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async listAll(req: Request, res: Response): Promise<Response> {
    try {
      const list = await this.SequelizeModel.findAll();
      return res.status(200).json(list);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const newData = req.body;
      await this.SequelizeModel.update(newData, { where: { id: Number(id) } });
      const person = await this.SequelizeModel.findByPk(id);
      return res.status(200).json(person);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      this.SequelizeModel.destroy({ where: { id: Number(id) } });
      return res
        .status(200)
        .json({ response: `O registro de id ${id} foi deletado com sucesso` });
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}
