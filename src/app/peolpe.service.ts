import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeolpeService {
  people = [
    {name: 'Nurgali', age: 16},
    {name: 'You', age: 27},
    {name: 'Else', age: 31}
  ];
  constructor() { }
}
