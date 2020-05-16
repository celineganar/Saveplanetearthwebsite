import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Challenge1Component } from './challenge1.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { CreateComponent } from '../create/create.component';

const routes: Routes = [
  { path: 'challenge1', component: Challenge1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Challenge1RoutingModule { }