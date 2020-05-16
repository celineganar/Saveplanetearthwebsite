import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ctrack5Component } from './ctrack5.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { CreateComponent } from '../create/create.component';

const routes: Routes = [
  { path: 'ctrack5', component: Ctrack5Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ctrack5RoutingModule { }