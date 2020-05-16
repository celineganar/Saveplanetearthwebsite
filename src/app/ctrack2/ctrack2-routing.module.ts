import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ctrack2Component } from './ctrack2.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { CreateComponent } from '../create/create.component';

const routes: Routes = [
  { path: 'ctrack2', component: Ctrack2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ctrack2RoutingModule { }