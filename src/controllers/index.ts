import { Request, Response } from "express";
import { IModel } from "../interface/model.js";
import { responseHandler } from "../decorators/response.js";
import { Model } from "sequelize";

export class BaseController {
  protected static SequelizeModel: IModel;

  @responseHandler()
  static async create(req: Request, res: Response): Promise<Model | void> {
    const newRegister = req.body;
    const resgister = new this.SequelizeModel(newRegister);
    await resgister.save();
    return resgister;
  }

  @responseHandler()
  static async find(req: Request, res: Response): Promise<Model | void> {
    const data = req.body;
    const list = await this.SequelizeModel.findOne({ where: data });
    return list;
  }

  @responseHandler()
  static async listAll(req: Request, res: Response): Promise<Model[] | void> {
    const list = await this.SequelizeModel.findAll();
    return list;
  }

  @responseHandler()
  static async update(req: Request, res: Response): Promise<Model[] | void> {
    const { id } = req.params;
    const newData = req.body;
    await this.SequelizeModel.update(newData, { where: { id: Number(id) } });
    const person = await this.SequelizeModel.findByPk(id);
  }

  @responseHandler()
  static async delete(
    req: Request,
    res: Response
  ): Promise<{ response: string }> {
    const { id } = req.params;
    this.SequelizeModel.destroy({ where: { id: Number(id) } });
    const result = {
      response: `O registro de id ${id} foi deletado com sucesso`,
    };
    return result;
  }
}
