import { Table, Column, Model, Scopes } from "sequelize-typescript";

@Scopes(() => ({
  admin: {
    where: {
      role: "admin",
    },
  },
  client: {
    where: {
      role: "client",
    },
  },
}))
@Table({ paranoid: true })
class Person extends Model {
  @Column({ primaryKey: true })
  id: number = 1;

  @Column
  name: string;

  @Column
  role: string;

  @Column
  email: string;

  @Column
  password: string;
}

export default Person;
