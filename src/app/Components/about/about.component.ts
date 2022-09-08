import { Component, OnInit } from '@angular/core';

import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ImagePath:string = "assets/images/AboutPage.jpg";

  constructor() {} 
 
  ngOnInit(): void {
  }

}
