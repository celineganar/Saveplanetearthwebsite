import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { GroceryItem } from 'src/models/grocery-item';
import { Item } from 'src/models/item';
import { Observable } from 'rxjs';
import {UpdateNotes1Component} from '../app/update-notes1/update-notes1.component'
import { firestore } from 'firebase';
import { FirebaseApp} from 'angularfire2';
import { Reference } from '@angular/compiler/src/render3/r3_ast';
@Injectable()

export class VoteService {
  
  email = '';
  up: UpdateNotes1Component;
  uid='';
  createItem = '';
  groceryItemsDoc: AngularFirestoreDocument<Item>;
  groceryItems: Observable<GroceryItem[]>;
  constructor(private afs: AngularFirestore,public afAuth: AngularFireAuth) {

    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {

        // show email in welcome message
        this.email = user.email;
        this.uid = user.uid;
        console.log("inside")
      }
      });
   }

  saveEntry(survey): void {
      this.afs.collection('cTracker').doc('userss').collection(this.uid).add(survey);    
   
  }
  

  getAllEntries(): Observable<any> {
    return this.afs.collection('cTracker').doc('userss').collection(this.uid).valueChanges();
  }

 

}