import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { EventsComponent } from '../events/events.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }