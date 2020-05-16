import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArticlesComponent } from './articles/articles.component';
import { UserComponent } from './user/user.component';
import { NotesComponent } from './notes/notes.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { Ctrack1Component} from './ctrack1/ctrack1.component'
import { Ctrack2Component} from './ctrack2/ctrack2.component'
import { Ctrack3Component} from './ctrack3/ctrack3.component'
import { Ctrack4Component} from './ctrack4/ctrack4.component'
import { Ctrack5Component} from './ctrack5/ctrack5.component'
import { Ctrack6Component} from './ctrack6/ctrack6.component'
import { Challenge1Component } from './challenge1/challenge1.component'
import { Challenge2Component } from './challenge2/challenge2.component'
import { Create2Component } from './create2/create2.component'
import { Challenge3Component } from './challenge3/challenge3.component'
import { UpdateNotes1Component } from './update-notes1/update-notes1.component';
export const rootRouterConfig: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'articles', component: ArticlesComponent},
  { path: 'ctrack1', component: Ctrack1Component},
  { path: 'ctrack2', component: Ctrack2Component},
  { path: 'ctrack3', component: Ctrack3Component},
  { path: 'ctrack4', component: Ctrack4Component},

  { path: 'ctrack6', component: Ctrack6Component},

  { path: 'ctrack5', component: Ctrack5Component},

  { path: 'challenge1', component: Challenge1Component},

  { path: 'challenge2', component: Challenge2Component},

  { path: 'challenge3', component: Challenge3Component},

  { path: 'create2', component: Create2Component},
  { path: 'notes', component: NotesComponent , loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule) },
  { path: 'updatenotes1', component: UpdateNotes1Component , loadChildren: () => import('./update-notes1/update-notes1.module').then(m => m.UpdateNotes1Module) },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}
];



