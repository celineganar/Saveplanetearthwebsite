import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Challenge2Component } from './challenge2.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { CreateComponent } from '../create/create.component';

const routes: Routes = [
  { path: 'challenge2', component: Challenge2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Challenge2RoutingModule { }