import { Injectable } from '@angular/core';
import { ElectronService } from '../core/services/electron/electron.service';

@Injectable({
  providedIn: 'root'
})
export class IpcTestService {

  constructor(private electronService: ElectronService) {
    console.log(this.electronService);

  }

  async getHora(): Promise<string> {
    const a: string = await this.electronService.ipcRenderer.invoke('testFn');
    console.log(a);
    return (new Date()).toDateString() + a;
  }
}
