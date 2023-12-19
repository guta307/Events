import { FindOptions, UpdateOptions } from "sequelize";
import { Model } from "sequelize-typescript";

export interface IModel {
  new (...args: any[]): Model;
  findOne(options: FindOptions): Promise<Model | null>;
  findAll(options?: FindOptions): Promise<Array<Model>>;
  destroy(options?: FindOptions): Promise<number>;
  findByPk(pk: number | string, options?: FindOptions): Promise<Model | null>;
  update(values: object, options: UpdateOptions): Promise<[number, Model[]]>;

  // outros métodos estáticos relevantes
}
