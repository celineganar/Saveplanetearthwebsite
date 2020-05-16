import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { RouterModule } from '@angular/router';
import { HomepageModule } from './homepage/homepage.module';
import { EventsModule } from './events/events.module';
import { CreateModule } from './create/create.module';
import { rootRouterConfig } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { NotesModule } from './notes/notes.module';
import { ArticlesModule } from './articles/articles.module';
import { UpdateNotes1Module} from './update-notes1/update-notes1.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { VoteService } from './vote.service';
import { Ctrack1Module } from './ctrack1/ctrack1.module';
import { Ctrack2Module } from './ctrack2/ctrack2.module';
import { Ctrack3Module } from './ctrack3/ctrack3.module';
import { Ctrack4Module } from './ctrack4/ctrack4.module';
import { Ctrack5Module } from './ctrack5/ctrack5.module';
import { Ctrack6Module } from './ctrack6/ctrack6.module';
import { Challenge1Module} from './challenge1/challenge1.module';

import { Challenge2Module} from './challenge2/challenge2.module';
import { Challenge3Module } from './challenge3/challenge3.module';
import { Create2Module } from './create2/create2.module';

@NgModule({
 declarations: [
   AppComponent,
   UserComponent
 ],
 imports: [
  AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  AngularFireAuthModule, // imports firebase/auth, only needed for auth features
   BrowserModule,
   RouterModule.forRoot(rootRouterConfig, { useHash: false }),
   HttpClientModule,
   LoginModule,
   ArticlesModule,
   RegisterModule,
   FormsModule,
   ReactiveFormsModule,
   HomepageModule,
   EventsModule,
   CreateModule,
   NotesModule,
   UpdateNotes1Module,
   NgxChartsModule,
   BrowserAnimationsModule,
  AngularFireDatabaseModule,
  Ctrack1Module,
  Ctrack2Module,
  Ctrack3Module,
  Ctrack4Module,
  Ctrack5Module,
  Ctrack6Module,
  Challenge1Module,
  Challenge2Module,
  Challenge3Module,
  Create2Module
 ],
 providers: [AuthService, UserService, UserResolver, AuthGuard,VoteService],
 bootstrap: [AppComponent]
})
export class AppModule { }