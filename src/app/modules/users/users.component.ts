import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses: {}; /* Empty object */

  constructor() { }

  ngOnInit() {
   // setTimeout(() => {
      this.users = [
        {
        firstName: 'Rahul',
        lastName: 'Dhiman',
        age: 26,
        address: {
          street: ' 50 Main st',
          city: 'Chandigarh',
          state: 'Punjab',
        },
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: false
      },
      {
        firstName: 'Shubham',
        lastName: 'Katoch',
        age: 28,
        address: {
          street: 'No mens Land',
          city: 'Kangra',
          state: 'Himachal Pradesh'
        },
        image: 'http://lorempixel.com/600/600/people/2',
        isActive: false
      },
      {
        firstName: 'Anita',
        lastName: 'Kumari',
        age: 29,
        address: {
          street: 'No womens Land',
          city: 'Chapra',
          state: 'Bihar'
        },
        image: 'http://lorempixel.com/600/600/people/1/',
        isActive: true
      }
    ];

      // this.showExtended = false;
  //  }, 2000);
      this.loaded = true;
      this.setCurrentClasses();
      /*this.addUser({
        firstName: 'Raman',
        lastName: 'Dewalker'
      });*/


  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

}
