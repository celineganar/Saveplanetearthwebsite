import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Ctrack5RoutingModule } from './ctrack5-routing.module';
import { Ctrack5Component } from './ctrack5.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [Ctrack5Component],
  imports: [
    CommonModule,
    Ctrack5RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class Ctrack5Module { }
