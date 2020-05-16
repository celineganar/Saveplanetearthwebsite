import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Ctrack4RoutingModule } from './ctrack4-routing.module';
import { Ctrack4Component } from './ctrack4.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [Ctrack4Component],
  imports: [
    CommonModule,
    Ctrack4RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class Ctrack4Module { }
