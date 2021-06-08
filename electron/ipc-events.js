"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapEvents = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const electron_1 = require("electron");
const process_1 = require("process");
const db_1 = require("./db");
function bootstrapEvents() {
    electron_1.ipcMain.handle('testFn', () => __awaiter(this, void 0, void 0, function* () {
        const todo = yield db_1.Todo.findOne({ where: { id: 1 } });
        console.log('olis', todo);
        return JSON.stringify(todo.get({ plain: true }));
    }));
    electron_1.ipcMain.handle('addReport', (_event, { report: Report }) => __awaiter(this, void 0, void 0, function* () {
        const result = yield Report.save(process_1.report);
        return result;
    }));
}
exports.bootstrapEvents = bootstrapEvents;
//# sourceMappingURL=ipc-events.js.map