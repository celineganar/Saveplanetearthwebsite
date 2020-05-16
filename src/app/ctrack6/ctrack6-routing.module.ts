import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ctrack6Component } from './ctrack6.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { CreateComponent } from '../create/create.component';

const routes: Routes = [
  { path: 'ctrack6', component: Ctrack6Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ctrack6RoutingModule { }