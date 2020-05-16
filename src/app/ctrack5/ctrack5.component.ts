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
  selector: 'app-ctrack5',
  templateUrl: './ctrack5.component.html',
  styleUrls: ['./ctrack5.component.css']
})
export class Ctrack5Component implements OnInit {

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
  countryCount1 = [];
  countryData = [];
  countryCount2 = [];
  countryData2 = [];
  cem=0;
 red=0;
  view: any[] = [700, 400];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Comparison';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'lbs CO2/year';
  // options
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  selectedDay:string;


  colorScheme = {domain: ['#4287f5', '#42f59c', '#24BAD8', '#f542ad']
  };

  exp=0;
  trees=0;
  percent=0;
  

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
    this.getAllEntries1().subscribe((results) => {
      this.chartdata = true;
      this.processData1(results); 
    })  
    this.getAllEntries().subscribe((results) => {
      this.chartdata = true;
      this.processData(results);

      this.countryCount1 = [];
    this.cem=0;
    this.red=0;
  
    results.forEach(element => {
      if (this.countryCount1[element.type]) 
        this.countryCount1[element.type]+=Number(element.total);
        else
        this.countryCount1[element.type] = Number(element.total);
    });
    for (var key in this.countryCount) {
      if (key=='Total Carbon Emissions'){
      let dubentry = {
        name: key,
        value: this.countryCount[key]
        }
        this.exp=Math.round(dubentry.value);
        this.percent=Math.round((this.exp/26200)*100)
        this.trees=Math.round(this.exp/140);
        console.log(this.trees)
      }
    }
    })

    
  
    
  }

  getAllEntries(): Observable<any> {
    return this.afs.collection('compare').doc('userss').collection(this.uid).valueChanges();
  }

  getAllEntries1(): Observable<any> {
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

processData1(entries) {
  this.countryCount2 = [];
  this.countryData2 = [];
  this.cem=0;
  this.red=0;

  entries.forEach(element => {
    if (this.countryCount2[element.type2]) 
      this.countryCount2[element.type2]+=Number(element.total);
      else
      this.countryCount2[element.type2] = Number(element.total);
  });
  for (var key in this.countryCount2) {
    let singleentry2 = {
      name: key,
      value: this.countryCount2[key]
    }
    
    this.countryData2.push(singleentry2);
    
    //Object.assign(this,{single})
  }

  
}



}

