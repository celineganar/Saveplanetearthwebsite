import { Component, OnInit } from '@angular/core';
import { Note, NotesService } from '../core/notes.service';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../core/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';
import { GroceryItem } from 'src/models/grocery-item';
import { Item } from 'src/models/item';
import { Observable } from 'rxjs';
import { Cemissions } from 'src/models/cemissions'

import { FormsModule,ReactiveFormsModule,FormControl} from '@angular/forms';
import { DeprecatedI18NPipesModule } from '@angular/common';
import { VoteService } from '../vote.service';
@Component({
  selector: 'app-ctrack4',
  templateUrl: './ctrack4.component.html',
  styleUrls: ['./ctrack4.component.css']
})
export class Ctrack4Component implements OnInit {
fuelEcon=0;
  user: Observable<firebase.User>;
  items: Observable<any[]>;
  gg=0;
  email='';
  uid='';
  vote: VoteService;
  survey = {
    country: '',
    gender: '',
    rating: 0
  }
  sel:'';

  tracker ={
    Date: new Date(),
    total: 0,
    subtotal: 0,
    points: 0,
    level: 1,
    type: 'Total Carbon Emissions'
  }
d= new Date();
  cf2: DocumentData;

  fs_collection: AngularFirestoreCollection;
  
  selectControl:FormControl = new FormControl()
  
  constructor( private notesService: NotesService,
            private authService: AuthService,
            private userService: UserService,
            public afAuth: AngularFireAuth,
            public afs: AngularFirestore,
            private router: Router) {
              this.afAuth.auth.onAuthStateChanged(user => {
                if (user) {
                  // show email in welcome message
                  this.email = user.email;
                  this.uid = user.uid;
                  console.log("inside")
                  
                }
              });
  }


  saveEntry() {
    const idx = this.afs.createId();
    var s:any;
    s=this.selectControl
    const carbonForm:Cemissions = {
     id:idx,
      Date: this.d,
      total: 0,
        subtotal:0,
        points: 0,
        level: 1,
        type: 'Total Carbon Emissions',
        type2: 'Household'
    };
    const avg:Cemissions = {
      id:idx,
       Date: this.d,
       total: 26200,
         subtotal:0,
         points: 0,
         level: 1,
         type: 'TnT Average Annual Emissions',
         type2: 'Average'
     };
    if (s=='1')
    this.fuelEcon=747;
    else if(s=='2')
    this.fuelEcon=1495;
    else if(s=='3')
    this.fuelEcon=2243;
    else if(s=='4')
    this.fuelEcon=2988;
    else
    this.fuelEcon=3735;

    carbonForm.total=this.fuelEcon*2.16
    console.log(carbonForm.total)
    this.afs.collection('cTracker').doc('userss').collection(this.uid).add(carbonForm); 
    this.afs.collection('cTracker5').doc('userss').collection(this.uid).add(carbonForm); 
    this.afs.collection('compare').doc('userss').collection(this.uid).add(carbonForm); 
    this.afs.collection('compare').doc('userss').collection(this.uid).add(avg);         
    this.router.navigate(['/ctrack5']);
  }
  
  ngOnInit(){

  }
}

