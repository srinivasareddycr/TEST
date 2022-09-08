import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  HomeImage:string = "assets/images/istockphoto-1371547852-170667a.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
