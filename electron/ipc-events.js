"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapEvents = void 0;
var electron_1 = require("electron");
function bootstrapEvents() {
    electron_1.ipcMain.handle('testFn', function () {
        console.log('olis');
        return "HOLA";
    });
}
exports.bootstrapEvents = bootstrapEvents;
//# sourceMappingURL=ipc-events.js.map