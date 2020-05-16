import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Create2RoutingModule } from './create2-routing.module';
import { Create2Component } from './create2.component';

@NgModule({
  imports: [
    CommonModule,
    Create2RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [Create2Component]
})
export class Create2Module { }