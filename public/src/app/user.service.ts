import { User } from './user';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  user= new Subject()
  constructor(private _http: Http) { }

  createUser(newUser: User, callback) {
    this._http.post('/users', newUser).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  authenticate(user: User, callback) {
    this._http.post('/login', user).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  session(callback) {
    this._http.get('/session').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  logout(callback) {
    this._http.delete('/users').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

}