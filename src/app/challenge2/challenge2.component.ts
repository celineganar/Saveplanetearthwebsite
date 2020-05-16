import { Component, OnInit , Inject} from '@angular/core';
import { Note, NotesService } from '../core/notes.service';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../core/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { FormControl} from '@angular/forms';
import { VoteService } from '../vote.service';
import { challengeItem } from 'src/models/challengeItem';
@Component({
  selector: 'app-challenge2',
  templateUrl: './challenge2.component.html',
  styleUrls: ['./challenge2.component.css']
})
export class Challenge2Component implements OnInit {
 
  dietEmissions=0;
  user: Observable<firebase.User>;
  items: Observable<any[]>;
  gg=0;
  email='';
  uid='';
  vote: VoteService;
  survey = {
    date:'',
    startTime:'',
    endTime:'',
    loc:''
  }
  sel:'';
  
    msg:string = 'error';
  tracker ={
    Date: new Date(),
    total: 0,
    subtotal: 0,
    points: 0,
    level: 1,
    type: 'Total Carbon Emissions'
  }
  ref: AngularFireStorageReference;
  task:AngularFireUploadTask;
d= new Date();
  cf2: DocumentData;

  fs_collection: AngularFirestoreCollection;
  
  selectControl:FormControl = new FormControl()
  
  constructor(private notesService: NotesService,
            private authService: AuthService,
            private userService: UserService,
            public afAuth: AngularFireAuth,
            public afs: AngularFirestore,
            private afStorage: AngularFireStorage,
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
    var st:any;
    var et:any;
    var locationx:any;
    var s:any;
    var da:any;
    s=this.selectControl
    st=this.survey.startTime
    et=this.survey.endTime
    da=this.survey.date
    locationx=this.survey.loc
    const idx = this.afs.createId();
    const challengeForm:challengeItem = {
     id:idx,
      Date: da,
      cName:s,
      sTime: st,
      eTime: et,
      location: locationx,
      points:5
    };
    
    this.afs.collection('challenge').doc('userss').collection(this.uid).add(challengeForm); 
    this.router.navigate(['/challenge3']);
  }
  ngOnInit() {
    
  }
  upload(event) {
    // create a random id
    const randomId = Math.random().toString(36).substring(2);
    // create a reference to the storage bucket location
    this.ref = this.afStorage.ref(randomId);
    // the put method creates an AngularFireUploadTask
    // and kicks off the upload
    this.task = this.ref.put(event.target.files[0]);
  }
}