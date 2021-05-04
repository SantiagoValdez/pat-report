import { ipcMain } from 'electron';
import { Todo } from './db';
export function bootstrapEvents(): void {
  ipcMain.handle('testFn', async () => {
    const todo = await Todo.findOne({ where: { id: 1 } });
    console.log('olis', todo);
    return JSON.stringify(todo.get({plain : true}));
  });
}