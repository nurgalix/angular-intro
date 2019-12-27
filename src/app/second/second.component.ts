import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LocalResolver } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  myAnimal = 'dog';
  childAnimal = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    let ourId = +this.route.snapshot.paramMap.get('id');
    console.log(ourId);
  }

  btnClicked = () => {
    this.location.back()
  }
  childChanged = (evt) => {
    this.childAnimal = evt;
  }
}
