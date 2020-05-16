import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import {AngularFirestoreCollection, AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../core/user.service';
import { Response } from '@angular/http';

export interface User {
  id?: string,
  email: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userCollection: AngularFirestoreCollection<User>;
  private users: Observable<User[]>
  constructor(
    private db: AngularFirestore,
   public afAuth: AngularFireAuth,
   public userService: UserService,
  private http: HttpClient,
 ){
  this.userCollection = db.collection<User> ('users');
  this.users = this.userCollection.snapshotChanges().pipe(
    map (actions => {
      return actions.map (a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ... data};
      })
    })
  )
  
 }

  doFacebookLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
  }

  doTwitterLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.TwitterAuthProvider();
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
  }

  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
  }

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res => {
          console.log("User id after reigstration = "+res.user.uid);
          let user: User = {
            email: value.email,
            id: res.user.uid
          };
          this.userCollection.doc(res.user.uid).set(user);
          resolve(res);
      }, err => reject(err))
    })
  }

  doLogin(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  doLogout(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        this.afAuth.auth.signOut();
        resolve();
      }
      else{
        reject();
      }
    });
  }

  doCreate(value){

      this.http.post(" https://www.eventbriteapi.com/v3/organizations/416845048919/events/",
  {
    
    'event.name.html': value.event_name,
    'event.start.timezone': 'America/Port_of_Spain',
    'event.start.utc': value.start_utc,
    'event.end.timezone': 'America/Port_of_Spain',
    'event.end.utc': value.end_utc,
    'event.currency': 'USD'
  },
  {headers:new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": "Bearer R3GPENLBZHXNXRQYN3A7"
  })
  })
  .subscribe(
      (val) => {
          console.log("POST call successful value returned in body", 
                      val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
    })
  }

  

    

  getCurrentUser() {
    if(firebase.auth().currentUser) {
      return firebase.auth().currentUser;
    } else {
      return null;
    }
  }
  



  
}
