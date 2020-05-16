
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
  selector: 'app-ctrack3',
  templateUrl: './ctrack3.component.html',
  styleUrls: ['./ctrack3.component.css']
})
export class Ctrack3Component implements OnInit {
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
        type2: 'Vehicle'
    };
    if (s=='Diesel')
    this.fuelEcon=26.2;
    else if(s=='Electric')
    this.fuelEcon=53.524;
    else if(s=='Hybrid')
    this.fuelEcon=88.43095;
    else
    this.fuelEcon=21.6;

    carbonForm.total=(1/this.fuelEcon)*(this.survey.rating*52)*19.6;
    console.log(carbonForm.total)
    this.afs.collection('cTracker').doc('userss').collection(this.uid).add(carbonForm);  
    this.afs.collection('cTracker5').doc('userss').collection(this.uid).add(carbonForm);
    this.afs.collection('compare').doc('userss').collection(this.uid).add(carbonForm);     
    this.router.navigate(['/ctrack4']);
  }
  
  ngOnInit(){

  }
}
