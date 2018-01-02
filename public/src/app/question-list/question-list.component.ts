import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { Question } from '../question';
import { AnswerService } from '../answer.service';
import { Answer } from '../answer';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  currentUser: User;
  question: Question = new Question();
  answer: Answer = new Answer();
  errors: string[] = [];
  question_id:string;
  answer_id:string;
  constructor(
    private _userService: UserService,
    private _questionService: QuestionService,
    private _answerService: AnswerService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params=> this.question_id = params.id)
    this._userService.session((res) => {
      if (res.status === false) {
        this._router.navigateByUrl('/');
      } else {
        this.currentUser = res;
        this.getquestionS();
        this.getAnswers();

        console.log(this.currentUser.name)
        console.log(this.question)

      }
    });
  }
  getquestionS(){
    this._questionService.show(this.question_id, question => this.question = question)
  }
  getAnswers(){
    this._answerService.show(this.answer_id, answer => this.answer = answer)
  }
  update(answer_id:string){
    this._answerService.update(answer_id, res => this.getAnswers())
  }
  logout(){
    this._userService.logout(this.currentUser);
    this._router.navigateByUrl('/');
  }

}
