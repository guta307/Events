import {
  Table,
  Column,
  Model,
  Scopes,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";

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
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

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
