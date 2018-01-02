import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { AnswerService } from '../answer.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NewQuestion } from '../new-question';
import { User } from '../user';
import { Question } from '../question';
import { Answer } from '../answer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer-new',
  templateUrl: './answer-new.component.html',
  styleUrls: ['./answer-new.component.css']
})
export class AnswerNewComponent implements OnInit {
  currentUser = User;
  Answer: Answer = new Answer();
  question: Question = new Question();
  errors: string[] = [];
  question_id:string;

  constructor(
    private _userService: UserService,
    private _questionService: QuestionService,
    private _answerService: AnswerService,
    private _router: Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params=> this.question_id = params.id)
    this._userService.session((res) => {
      if (res.status === false) {
        this._router.navigateByUrl('/');
      } else {
        this.currentUser = res;
        this.getquestionS();

        console.log(this.currentUser.name)
        console.log(this.question)
        console.log("question object is above me")
      }
    });
  }
  getquestionS(){
    this._questionService.show(this.question_id,(question)=> this.question = question)
  }
  create(){
    this.errors=[];
    console.log('do you work??')
    this._answerService.createAnswer(this.Answer, this.question_id, (Answer)=>{
      console.log('can u work?')
      if(Answer.errors){
        for(const key of Object.keys(Answer.errors)){
          const errors = Answer.errors[key];
          this.errors.push(errors.message);
          console.log('errors but it  works in Answer component');
        }
      }else{
        console.log('this is how ill find answers')
        console.log(Answer)
        console.log('answer is above me ');
        this._router.navigateByUrl('/dashboard');

      }
    })
  }
  
  logout(){
    this._userService.logout(this.currentUser);
    this._router.navigateByUrl('/');
  }


}
