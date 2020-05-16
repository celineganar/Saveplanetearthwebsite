import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateNotes1Component } from './update-notes1.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { CreateComponent } from '../create/create.component';

const routes: Routes = [
  { path: 'updatenotes1', component: UpdateNotes1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateNotes1RoutingModule { }