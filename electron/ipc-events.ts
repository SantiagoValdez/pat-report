/* eslint-disable @typescript-eslint/no-unused-vars */
import { ipcMain } from 'electron';
import { report } from 'process';
import { Report, Todo } from './db';
export function bootstrapEvents(): void {
  ipcMain.handle('testFn', async () => {
    const todo = await Todo.findOne({ where: { id: 1 } });
    console.log('olis', todo);
    return JSON.stringify(todo.get({plain : true}));
  });

  ipcMain.handle('addReport', async (_event, { report: Report }) => {
    const result = await Report.save(report);
    return result;
  });
}

