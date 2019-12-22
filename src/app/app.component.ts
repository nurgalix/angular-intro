import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Nurgali';
  today = new Date();
  counter = "go";

  btnClicked = () => {
    this.counter += "o";
  }
}
