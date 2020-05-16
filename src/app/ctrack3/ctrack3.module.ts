import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Ctrack3RoutingModule } from './ctrack3-routing.module';
import { Ctrack3Component } from './ctrack3.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [Ctrack3Component],
  imports: [
    CommonModule,
    Ctrack3RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class Ctrack3Module { }
