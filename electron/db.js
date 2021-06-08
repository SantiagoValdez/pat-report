"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = exports.Todo = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    database: "PATREPORT",
    dialect: "sqlite",
    storage: 'patreport.db'
});
class Todo extends sequelize_1.Model {
}
exports.Todo = Todo;
Todo.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: "todo",
    sequelize,
});
class Report extends sequelize_1.Model {
}
exports.Report = Report;
Report.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: new Date(),
    },
    note: {
        type: sequelize_1.DataTypes.TEXT,
    },
    number: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    lastEdit: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: new Date()
    }
}, {
    tableName: "report",
    sequelize,
});
//sequelize.sync({});
//# sourceMappingURL=db.js.map