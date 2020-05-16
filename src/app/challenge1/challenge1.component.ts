import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge1',
  templateUrl: './challenge1.component.html',
  styleUrls: ['./challenge1.component.css']
})
export class Challenge1Component implements OnInit {
  tasks=[];
  randomItem;
  constructor() { }

  ngOnInit() {
  }

  randomTask(){
    this.tasks=["Switch to LED light bulbs in your home",
    "Turn off light switches when not in use ",
    "Unplug appliances when not in use ",
    "Turn off tap when not in use",
    "Use a bucket to wash car/ water plants instead of a hose",
    "Recycle 5 items",
    " Pick up 10 pieces of garbage in your neighborhood ",
    "Ride a bike instead of vehicle",
    "Take the bus instead of driving ",
    "Take a reusable bag to grocery",
    "Plant a tree or vegetable plant in backyard "]

    this.randomItem = this.tasks[Math.floor(Math.random()*this.tasks.length)];

  }

}
