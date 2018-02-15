import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Router} from '@angular/router';
import {User} from './user';

@Injectable()
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor( private router: Router) { }

  login(user: User) {
    if (user.userName !== '' && user.password != '') { // {3}
      this.loggedIn.next(true);
      this.router.navigate(['/dashboard']);
    }
  }
  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
