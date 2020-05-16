import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ctrack4Component } from './ctrack4.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { CreateComponent } from '../create/create.component';

const routes: Routes = [
  { path: 'ctrack4', component: Ctrack4Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ctrack4RoutingModule { }