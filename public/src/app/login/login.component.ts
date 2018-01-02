
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: User = new User();
  ninja: User = new User();
  registrationErrors: string[] = [];
  loginErrors: string[] = [];
  
  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  createUser() {
    this.registrationErrors = [];
    this._userService.createUser(this.newUser, (res) => {
      if (res.errors) {
        for (const key of Object.keys(res.errors)) {
          const error = res.errors[key];
          this.registrationErrors.push(error.message);
        }
      } else {
        this._router.navigateByUrl('/dashboard');
      }
    });
  }

  loginUser() {
    console.log("are you working?")
    this.loginErrors = [];
    this._userService.authenticate(this.ninja, (res) => {
      console.log(res);
      console.log("hello")
      if (res.errors) {
        for (const key of Object.keys(res.errors)) {
          const error = res.errors[key];
          this.loginErrors.push(error.message);
          console.log('errors if statement')
        }
      } else {
        console.log(User)
        this._router.navigateByUrl('/dashboard');
      }
    });
  }

}