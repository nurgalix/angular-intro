import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name = 'Nurgali';
  today = new Date();
  counter = 0;
  people = [
    {name:'Nurgali', age:16},
    {name:'You', age:27}
  ];

  ngOnInit() {
    this.counter = 2;
  }
  btnClicked = () => {
    this.counter ++;
  }
}
