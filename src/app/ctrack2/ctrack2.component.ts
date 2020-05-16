import { Component, OnInit } from '@angular/core';
import { Note, NotesService } from '../core/notes.service';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../core/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, DocumentSnapshot,AngularFirestoreDocument,AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';
import { GroceryItem } from 'src/models/grocery-item';
import { Item } from 'src/models/item';
import { Observable } from 'rxjs';
import { Cemissions } from 'src/models/cemissions'

import { firestore } from 'firebase';
import { FormsModule,ReactiveFormsModule,FormControl} from '@angular/forms';
import { DeprecatedI18NPipesModule } from '@angular/common';
import { VoteService } from '../vote.service';
import { DatabaseReference,DatabaseSnapshot } from '@angular/fire/database/interfaces';
@Component({
  selector: 'app-ctrack2',
  templateUrl: './ctrack2.component.html',
  styleUrls: ['./ctrack2.component.css']
})
export class Ctrack2Component implements OnInit {

  dietEmissions=0;
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
  
  constructor(private notesService: NotesService,
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
    var em=0;
    var s:any;
    s=this.selectControl
    const idx = this.afs.createId();
    const carbonForm:Cemissions = {
     id:idx,
      Date: this.d,
      total: 0,
        subtotal:0,
        points: 0,
        level: 1,
        type: 'Total Carbon Emissions',
        type2: 'Lifestyle'
    };
    if (s=='1'){
    em=6600;
    }
    else if(s==='2'){
    em=5000;
    }
    else if(s=='3'){
    em=3800;
    }
    else if(s=='4'){
    em=3400;
    }
    else if(s=='5'){
    em=3000;
    }

    carbonForm.total=em;
    console.log(em)
    this.afs.collection('cTracker').doc('userss').collection(this.uid).add(carbonForm);  
    this.afs.collection('cTracker5').doc('userss').collection(this.uid).add(carbonForm);     
    this.afs.collection('compare').doc('userss').collection(this.uid).add(carbonForm);
    this.router.navigate(['/ctrack3']);
  }
  ngOnInit() {
    
  }

}
