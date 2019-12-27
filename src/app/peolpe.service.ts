import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeolpeService {

  newObservable$ = new Observable( observer => {
    observer.next('hello');
  });

  people = [
    {name: 'Nurgali', age: 16},
    {name: 'You', age: 27},
    {name: 'Else', age: 31},
    {name: 'John', age: 24}
  ];
  constructor() { }

  allPeople() {
    // we could call external API
    return this.people
  }

}
