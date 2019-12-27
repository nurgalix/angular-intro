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
  today = new Date();
  cash = 2;  

  constructor(private peopleService: PeolpeService) {}

  ngOnInit() {
    this.counter = 2;
    this.people = this.peopleService.allPeople();

    this.peopleService.newObservable$.subscribe(
      data => {
        console.log('obs data here:',data);
      },
      error => {
        console.log('error');
      }
    );
  }

}
