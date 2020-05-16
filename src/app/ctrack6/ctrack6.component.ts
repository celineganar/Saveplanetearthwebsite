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
import { timingSafeEqual } from 'crypto';
@Component({
  selector: 'app-ctrack6',
  templateUrl: './ctrack6.component.html',
  styleUrls: ['./ctrack6.component.css']
})
export class Ctrack6Component implements OnInit {
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
  chartdata: boolean = false;
d= new Date();
  cf2: DocumentData;
  footsteps=0;
  countryCount = [];
  countryData = [];
  fs_collection: AngularFirestoreCollection;
  
  selectControl:FormControl = new FormControl()

  selectControl2:FormControl = new FormControl()

  selectControl3:FormControl = new FormControl()
  cf5:any;
  selectControl4:FormControl = new FormControl()
  single: any[];
  view: any[] = [825, 400];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;
  gradient: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  colorScheme = {
    domain: ['#4287f5', '#42f59c', '#24BAD8', '#f542ad', '#a8385d', '#E59931']
  };
str='';
levelup=0;
displayLevel='';
lev=0;
  
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

saveEntry5(){
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
        type: 'Footsteps',
        type2: 'None'
    };
    
    carbonForm.subtotal=this.survey.rating*1250
    carbonForm.total=1.6 *this.survey.rating
    this.footsteps=Math.round(Number(carbonForm.subtotal));
    this.str= this.footsteps + ' Steps Taken.'
    console.log(carbonForm.total)
    this.afs.collection('cTracker5').doc('userss').collection(this.uid).add(carbonForm);   
    this.getAllEntries().subscribe((results) => {
      this.chartdata = true;
      this.processData(results); 
    }) 
}
saveEntry8(){
    this.getAllEntries().subscribe((results) => {
      this.chartdata = true;
      this.processData(results);
    })

    
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
        type: 'Food Consumption',
        type2: 'None'
    };
    
    if (s=='1')
    this.fuelEcon=10;
    else if(s=='2')
    this.fuelEcon=6;
    else if(s=='3')
    this.fuelEcon=8;
    else if(s=='4')
    this.fuelEcon=1784;
    else
    this.fuelEcon=400;

    carbonForm.total=this.fuelEcon
    console.log(carbonForm.total)

    


  
    this.afs.collection('cTracker5').doc('userss').collection(this.uid).add(carbonForm);
     
    this.getAllEntries().subscribe((results) => {
      this.chartdata = true;
      this.processData(results); 
    })       
  }

  saveEntry2() {
    const idx = this.afs.createId();
    var s:any;
    s=this.selectControl2
    const carbonForm:Cemissions = {
     id:idx,
      Date: this.d,
      total: 0,
        subtotal:0,
        points: 0,
        level: 1,
        type: 'Shopping Activity',
        type2: 'None'
    };
    
    if (s=='1')
    this.fuelEcon=8;
    else if(s=='2')
    this.fuelEcon=600;
    else if(s=='3')
    this.fuelEcon=5;
    else if(s=='4')
    this.fuelEcon=20;
    else
    this.fuelEcon=30;

    carbonForm.total=this.fuelEcon
    carbonForm.points=this.fuelEcon
    console.log(carbonForm.total)
    this.afs.collection('cTracker5').doc('userss').collection(this.uid).add(carbonForm);   
   
    this.getAllEntries().subscribe((results) => {
      this.chartdata = true;
      this.processData(results); 
    })       
  }
  
  saveEntry3() {
    const idx = this.afs.createId();
    var s:any;
    s=this.selectControl3
    const carbonForm:Cemissions = {
     id:idx,
      Date: this.d,
      total: 0,
        subtotal:0,
        points: 0,
        level: 1,
        type: 'Transportation',
        type2: 'None'
    };
    
    if (s=='1')
    this.fuelEcon=3;
    else if(s=='2')
    this.fuelEcon=3;
    else if(s=='3')
    this.fuelEcon=178;
    else if(s=='4')
    this.fuelEcon=4100;
    else
    this.fuelEcon=800;

    carbonForm.total=this.fuelEcon

    carbonForm.points=this.fuelEcon
    console.log(carbonForm.total)
    this.afs.collection('cTracker5').doc('userss').collection(this.uid).add(carbonForm);   
   
    this.getAllEntries().subscribe((results) => {
      this.chartdata = true;
      this.processData(results); 
    })       
  }
  saveEntry4() {
    const idx = this.afs.createId();
    var s:any;
    s=this.selectControl4
    const carbonForm:Cemissions = {
     id:idx,
      Date: this.d,
      total: 0,
        subtotal:0,
        points: 0,
        level: 1,
        type: 'Waste Reduction',
        type2: 'None'
    };
    
    if (s=='1')
    this.fuelEcon=2;
    else if(s=='2')
    this.fuelEcon=2;
    else if(s=='3')
    this.fuelEcon=1;
    else if(s=='4')
    this.fuelEcon=2;
    else
    this.fuelEcon=390;

    carbonForm.total=this.fuelEcon

    carbonForm.points=this.fuelEcon
    console.log(carbonForm.total)
    this.afs.collection('cTracker5').doc('userss').collection(this.uid).add(carbonForm);   
    
    this.getAllEntries().subscribe((results) => {
      this.chartdata = true;
      this.processData(results); 
    })       
  }
  ngOnInit(){

  }

  getAllEntries(): Observable<any> {
    return this.afs.collection('cTracker5').doc('userss').collection(this.uid).valueChanges();
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
