import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UpdateNotes1RoutingModule } from './update-notes1-routing.module';
import { UpdateNotes1Component } from './update-notes1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    UpdateNotes1RoutingModule,
    FormsModule,
    NgxChartsModule,
   BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateNotes1Component],
  bootstrap:    [ UpdateNotes1Component ]
  
})
export class UpdateNotes1Module { }
