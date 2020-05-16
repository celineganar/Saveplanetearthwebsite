import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ctrack1Component } from './ctrack1.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { CreateComponent } from '../create/create.component';

const routes: Routes = [
  { path: 'ctrack1', component: Ctrack1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ctrack1RoutingModule { }