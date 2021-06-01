import { Routes, RouterModule } from "@angular/router";
import { ReportComponent } from "./report.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'report',
    component: ReportComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }

// Why we do this?