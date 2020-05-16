import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Ctrack1RoutingModule } from './ctrack1-routing.module';
import { Ctrack1Component } from './ctrack1.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [Ctrack1Component],
  imports: [
    CommonModule,
    Ctrack1RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class Ctrack1Module { }
