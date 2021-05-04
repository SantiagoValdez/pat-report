import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  database: "PATREPORT",
  dialect: "sqlite",
  storage: 'patreport.db'
});

export class Todo extends Model {
  public id!: number;
  public description!: string;
}


Todo.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey : true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    tableName: "todo",
    sequelize,
  }
);

//sequelize.sync({});