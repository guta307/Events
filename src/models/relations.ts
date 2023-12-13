import Person from "./user.model.js";
import Event from "./event.model.js";

export function setupRelations() {
  Event.belongsTo(Person, { foreignKey: "personId" });
  Person.hasMany(Event, { foreignKey: "personId" });
}
