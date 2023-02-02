import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ImagePath:string;
  constructor() {
    //image location
    this.ImagePath = '/assets/ecommerceimage.png'
  }
}
