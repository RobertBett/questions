import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { NewQuestion } from '../new-question';

@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.css']
})
export class QuestionNewComponent implements OnInit {
  newQuestion: NewQuestion = new NewQuestion();
  currentUser: User = new User();
  errors: string[] = [];


  constructor(
    private _userService: UserService,
    private _questionService: QuestionService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._userService.session((res) => {
      if (res.status === false) {
        this._router.navigateByUrl('/');
      } else {
        this.currentUser = res;
        // console.log(this.currentUser)
      }
    });
  }

  createQuestion(){
    this.errors=[];
    this._questionService.create(this.newQuestion,(question)=>{
      if(question.errors){
        for (const key of Object.keys(question.errors)) {
          const error = question.errors[key];
          this.errors.push(error.message);
          console.log(this.errors)
          console.log('error but it works on the front-end')
        }
      }else{
        console.log('it completly works')
        this._router.navigateByUrl('/dashboard');

      }
    });
    
  }
  logout(){
    this._userService.logout(this.currentUser);
    this._router.navigateByUrl('/');
  }


}
