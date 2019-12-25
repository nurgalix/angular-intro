import { Component, OnInit } from '@angular/core';
import { PeolpeService } from './peolpe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Nurgali';
  counter = 0;
  mycolor = 'purple'; 
  people = [];  

  constructor(private peopleService: PeolpeService) {}

  ngOnInit() {
    this.counter = 2;
    this.peopleService;
  }
  btnClicked = () => {
    this.counter ++;
    this.mycolor = 'red';
  }
}
