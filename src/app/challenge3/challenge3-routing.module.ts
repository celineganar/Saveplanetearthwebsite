import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Challenge3Component } from './challenge3.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { CreateComponent } from '../create/create.component';

const routes: Routes = [
  { path: 'challenge3', component: Challenge3Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Challenge3RoutingModule { }