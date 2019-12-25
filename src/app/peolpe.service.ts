import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeolpeService {
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
