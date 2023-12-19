import { Model } from "sequelize";
import { Request, Response } from "express";

export function responseHandler(): MethodDecorator {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const OrginalMethod = descriptor.value;

    descriptor.value = async function (
      req: Request,
      res: Response
    ): Promise<Response> {
      try {
        const result: Model | Model[] = await OrginalMethod.apply(this, [req]);
        return res.status(200).json(result);
      } catch (e) {
        console.log(e);
        return res.status(500).json(e);
      }
    };

    return descriptor;
  };
}
