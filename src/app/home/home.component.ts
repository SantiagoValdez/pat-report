import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IpcTestService } from '../services/ipc-test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private ipcService: IpcTestService) { }

  ngOnInit(): void { }

  async onClick(): Promise<void> {
    const respuesta = await this.ipcService.getHora();
    console.log(respuesta);
  }

}
