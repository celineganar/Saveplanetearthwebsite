import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { CreateComponent } from '../create/create.component';

const routes: Routes = [
  { path: 'notes', component: NotesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }