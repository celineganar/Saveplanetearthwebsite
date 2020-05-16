import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Challenge2RoutingModule } from './challenge2-routing.module';
import { Challenge2Component } from './challenge2.component';

import {AngularFireStorage} from 'angularfire2/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AngularFirestore } from 'angularfire2/firestore';
@NgModule({
  declarations: [Challenge2Component],
  providers:[AngularFireStorage],
  imports: [
    CommonModule,
    Challenge2RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class Challenge2Module { }
