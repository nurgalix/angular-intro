import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Nurgali';
  today = new Date();
  counter = 0;
  people = [
    {name:'Nurgali', age:16},
    {name:'You', age:27}
  ];

  btnClicked = () => {
    this.counter ++;
  }
}
