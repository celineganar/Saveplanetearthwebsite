import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";

@Component({
 selector: 'app-events',
 templateUrl: './events.component.html',
 styleUrls: ['./events.component.css'],
 encapsulation: ViewEncapsulation.None,
})

export class EventsComponent implements OnInit{
 name = 'event-names';
 public data:any = []
 constructor(private http: HttpClient) {
   
 }

 getData(){
   const url ='https://www.eventbriteapi.com/v3/events/88827608769/?token=R3GPENLBZHXNXRQYN3A7'
   const url2 = 'https://www.eventbriteapi.com/v3/events/86423337529/?token=R3GPENLBZHXNXRQYN3A7'
   const url3 = 'https://www.eventbriteapi.com/v3/events/99081101241/?token=R3GPENLBZHXNXRQYN3A7'
   forkJoin(this.http.get(url),this.http.get(url2),this.http.get(url3)).subscribe((res)=>{
     this.data = res
     console.log(this.data)
   })
 }

 ngOnInit() {
  this.getData()
}

 
}
