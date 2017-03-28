import {Component} from '@angular/core';

@Component(
  {
    selector: 'user',
    template: '<h1>Hello{{name}}</h1>' +
    '<p>Email :<strong>{{email}}</strong> </p>' +
    '<p>Address :{{address.city}} {{address.street}} {{address.pin}}</p>' +
    '<button (click)="toggleHobbiee()">Show Hobbies</button>' +
    '<div *ngIf="shwHobbies"><div *ngFor="let hobby of hobbies">{{hobby}}</div></div>'
  })
export class UserComponent {
  name:string;
  email:string;
  address:address;
  hobbies:string[];
  shwHobbies:boolean;

  constructor() {
    this.name = 'Narendra';
    this.email = 'narendraraghu.89@gmail.com';
    this.hobbies = ['Cricket', 'Music', 'Coding'];
    this.shwHobbies = false;
    this.address = {
      city: 'Kareli',
      street: 'Shastri ward',
      pin: '122'
    }
  }

  toggleHobbiee() {
    if (this.shwHobbies == false) {
      this.shwHobbies = true;
    }
    else
      this.shwHobbies = false;
  }
}

interface address {
  city:string;
  street:string;
  pin:string;
}
