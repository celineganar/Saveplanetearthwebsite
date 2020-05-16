import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { EventsComponent } from '../events/events.component';
import { CreateComponent } from '../create/create.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }