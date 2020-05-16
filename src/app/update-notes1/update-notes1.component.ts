import { Component, OnInit } from '@angular/core';
import { Note, NotesService } from '../core/notes.service';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../core/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase} from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { firestore } from 'firebase';
import { Observable } from 'rxjs';
import { GroceryItem } from 'src/models/grocery-item';
import { Item } from 'src/models/item';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from '../data';

@Component({
  selector: 'app-update-notes1',
  templateUrl: './update-notes1.component.html',
  styleUrls: ['./update-notes1.component.css']
})
export class UpdateNotes1Component implements OnInit {
  single: any[];
  view: any[] = [700, 400];
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  note:Note = {
    title: "",
    addedAt: new Date().getTime(),
    text: ""
  };
  
  groceryItemsDoc: AngularFirestoreDocument<Item>;
  groceryItems: Observable<GroceryItem[]>;
  email = '';
  uid='';
  total=0;
  points=0;
  s=0;
  ind=0;
  groceryItem: GroceryItem ;

  vnotess:GroceryItem;
  selectItem = '';
  
washingtonRef: firestore.DocumentReference;
DocumentSnapshot: firestore.DocumentSnapshot;
  constructor(public afAuth: AngularFireAuth,
            public afs: AngularFirestore,
            public db: AngularFireDatabase,
            private router: Router) {

              this.afAuth.auth.onAuthStateChanged(user => {
                if (user) {
                  // show email in welcome message
                  this.email = user.email;
                  this.uid= user.uid;
                  console.log("inside")
                }
              });
            
            }
             
  
           

  ngOnInit() {
  }
getUID(){
  var idx=this.uid;
  return idx;
}
  
  async selectItems() { 
  this.washingtonRef = this.afs.firestore.collection("user").doc(this.uid).collection("Total1").doc(this.uid)
  // Atomically increment the population of the city by 50.
  this.washingtonRef.update("earned", firestore.FieldValue.increment(50));
  this.washingtonRef.update({subtotal: firestore.FieldValue.increment(-50)});
  this.groceryItemsDoc = this.afs.doc<Item>('user/' + this.uid);
  this.groceryItems = this.groceryItemsDoc.collection<GroceryItem>('Total1').valueChanges();
  
}

onSelect(event) {
  console.log(event);
}

onActivate(event){
  console.log(event);
}

onDeactivate(event){
  console.log(event);
}


}

