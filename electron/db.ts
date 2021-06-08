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

export class Report extends Model {
  public id!: number;
  public date: Date;
  public note: string;
  public number!: string;
  public lastEdit: Date;
}


Report.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey : true,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    note: {
      type: DataTypes.TEXT,
    },
    number: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastEdit: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  },
  {
    tableName: "report",
    sequelize,
  }
);

//sequelize.sync({});