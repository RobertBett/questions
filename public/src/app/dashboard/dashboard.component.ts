import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser = User;
  questions: Question[];

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _questionService: QuestionService
  ) { }

  ngOnInit() {
    this._userService.session((res) => {
      if (res.status === false) {
        this._router.navigateByUrl('/');
      } else {
        this.currentUser = res;
        this.newMethod();
        console.log(this.currentUser)
        console.log("user info")
      }
      this.getQuestions();
    });
  }
  getQuestions(){
    this._questionService.index((questions)=> this.questions = questions)
  }


  logout(){
    this._userService.logout(this.currentUser);
    this._router.navigateByUrl('/');
  }


  private newMethod() {
    console.log('you can do this');
  }
}