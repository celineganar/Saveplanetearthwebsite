import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseUserModel } from '../core/user.model';

import { Note, NotesService } from '../core/notes.service';

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
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  multi: any[];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;
  chartdata: boolean = false;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  user: FirebaseUserModel = new FirebaseUserModel();
  profileForm: FormGroup;
  email='';
  uid='';
  countryCount = [];
  countryData = [];
  constructor(private notesService: NotesService,
    
    public afs: AngularFirestore,
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location : Location,

    public afAuth: AngularFireAuth,
    private fb: FormBuilder
  ) {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        // show email in welcome message
        this.email = user.email;
        this.uid = user.uid;
        console.log("inside")
        
      }
    });

  }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.user = data;
        this.createForm(this.user.name);
      }
    })
  }

  createForm(name) {
    this.profileForm = this.fb.group({
      name: [name, Validators.required ]
    });
  }

  save(value){
    this.userService.updateCurrentUser(value)
    .then(res => {
      console.log(res);
    }, err => console.log(err))
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log("Logout error", error);
    });
  }

  saveEntry() {
     
    this.getAllEntries().subscribe((results) => {
      this.chartdata = true;
      this.processData(results);
    })
  }

  getAllEntries(): Observable<any> {
    return this.afs.collection('challenge').doc('userss').collection(this.uid).valueChanges();
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
    if (this.countryCount[element.Date]) 
      this.countryCount[element.Date]+=Number(element.points);
      else
      this.countryCount[element.Date] = Number(element.points);
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

