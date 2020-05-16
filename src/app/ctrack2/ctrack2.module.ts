import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Ctrack2RoutingModule } from './ctrack2-routing.module';
import { Ctrack2Component } from './ctrack2.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [Ctrack2Component],
  imports: [
    CommonModule,
    Ctrack2RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class Ctrack2Module { }
