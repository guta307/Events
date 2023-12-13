import { Table, Column, Model } from "sequelize-typescript";

@Table({ paranoid: true })
class Event extends Model {
  @Column
  title: string;

  @Column
  description: string;

  @Column
  date: Date;
}

export default Event;
