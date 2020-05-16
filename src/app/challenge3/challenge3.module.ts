import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Challenge3RoutingModule } from './challenge3-routing.module';
import { Challenge3Component } from './challenge3.component';

import {AngularFireStorage} from 'angularfire2/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AngularFirestore } from 'angularfire2/firestore';
@NgModule({
  declarations: [Challenge3Component],
  providers:[AngularFireStorage],
  imports: [
    CommonModule,
    Challenge3RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class Challenge3Module { }
