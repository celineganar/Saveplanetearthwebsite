
import { Component, OnInit } from '@angular/core';
import { Note, NotesService } from '../core/notes.service';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../core/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { GroceryItem } from 'src/models/grocery-item';
import { Item } from 'src/models/item';
import { Observable } from 'rxjs';

import { FormsModule,ReactiveFormsModule,FormControl} from '@angular/forms';
import { DeprecatedI18NPipesModule } from '@angular/common';
import { VoteService } from '../vote.service';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
@Component({
  selector: 'app-note',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {

  user: Observable<firebase.User>;
  items: Observable<any[]>;
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
    type: 'Reduce'
  }


  chartdata: boolean = false;
  selectControl:FormControl = new FormControl()
  countryCount = [];
  countryData = [];
  cem=0;
 red=0;
  view: any[] = [700, 400];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Population';
  // options
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  selectedDay:string;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

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
    this.tracker.total=this.survey.rating;
    console.log(this.selectControl);
  
    this.afs.collection('cTracker').doc('userss').collection(this.uid).add(this.tracker);    
    this.getAllEntries().subscribe((results) => {
      this.chartdata = true;
      this.processData(results);
    })
  }

  getAllEntries(): Observable<any> {
    return this.afs.collection('cTracker').doc('userss').collection(this.uid).valueChanges();
  }

  ngOnInit() {
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

processData(entries) {
  this.countryCount = [];
  this.countryData = [];
  this.cem=0;
  this.red=0;

  entries.forEach(element => {
    if (this.countryCount[element.type]) 
      this.countryCount[element.type]+=Number(element.total);
      else
      this.countryCount[element.type] = Number(element.total);
  });
  for (var key in this.countryCount) {
    let singleentry = {
      name: key,
      value: this.countryCount[key]
    }
    this.countryData.push(singleentry);
    
    //Object.assign(this,{single})
  }
}



}
