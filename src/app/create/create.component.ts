//post
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";
import { HttpHeaders } from '@angular/common/http';
//post
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { AuthService } from '../core/auth.service';

@Component({
 selector: 'app-create',
 templateUrl: './create.component.html',
 styleUrls: ['./create.component.css'],
 encapsulation: ViewEncapsulation.None,
 
})

export class CreateComponent {
  createEventForm: FormGroup; 
  errorMessage: string = '';
 constructor(
  public authService: AuthService,
  private http: HttpClient,
  private formBuilder: FormBuilder,
  private router: Router, 
  private cb: FormBuilder,
  private activatedRoute: ActivatedRoute) 
  {
    this.eventForm();
  }
 
 eventForm() {
  this.createEventForm = this.cb.group({
    event_name: ['' ],
    currency: [''],
    start_timezone:[''],
    start_utc:[''],
    end_timezone:[''],
    end_utc:['']
  });
}
 
 createIt(value){
  this.authService.doCreate(value)
  this.router.navigate(['/create2']);
}

 
 






}
