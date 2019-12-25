import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { PeolpeService } from './peolpe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Nurgali';
  today = new Date();
  counter = 0;
  mycolor = 'purple'; 
  people = [];  

  constructor(private PeopleService:PeolpeService)

  ngOnInit() {
    this.counter = 2;
    this.peopleService;
  }
  btnClicked = () => {
    this.counter ++;
  }
}
