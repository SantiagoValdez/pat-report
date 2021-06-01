import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';

import { TuiButtonModule } from '@taiga-ui/core';
import { TuiEditorModule } from '@taiga-ui/addon-editor';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [CommonModule, TranslateModule, FormsModule, TuiButtonModule, TuiEditorModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, TuiButtonModule, TuiEditorModule]
})
export class SharedModule { }
