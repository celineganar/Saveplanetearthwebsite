//post
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";
import { HttpHeaders } from '@angular/common/http';
//post
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { AngularFirestore,AngularFirestoreDocument  } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { VoteService } from './vote.service';
import { element } from 'protractor';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {single} from './data'
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css','../assets/css/style.css','../assets/css/materialize.css'],
 encapsulation: ViewEncapsulation.None,
 
})

export class AppComponent implements OnInit{
 
  user: Observable<firebase.User>;
  items: Observable<any[]>;
  
  
  
 constructor(
  private vote: VoteService,
  private http: HttpClient,
  private formBuilder: FormBuilder,
  private router: Router, 
  public afs: AngularFirestore,
  private activatedRoute: ActivatedRoute,
  public afAuth: AngularFireAuth, db: AngularFirestore) {
    this.afAuth.auth.signInAnonymously();
    this.user = this.afAuth.authState;
    this.items = db.collection('users').valueChanges();
   
  }

  
 ngOnInit() {
    
  }
 
 



}
