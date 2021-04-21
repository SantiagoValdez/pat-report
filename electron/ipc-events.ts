import { ipcMain } from 'electron';

export function bootstrapEvents(): void {
  ipcMain.handle('testFn', () => {
    console.log('olis');
    return "HOLA";
  });
}