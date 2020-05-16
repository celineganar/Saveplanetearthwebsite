import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

@NgModule({
  imports: [
    CommonModule,
    CreateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CreateComponent]
})
export class CreateModule { }