import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Create2Component } from './create2.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { EventsComponent } from '../events/events.component';

const routes: Routes = [
  { path: 'create2', component: Create2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Create2RoutingModule { }