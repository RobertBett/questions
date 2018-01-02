import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import{ Question} from './question'
import { NewQuestion } from './new-question';

@Injectable()
export class QuestionService {

  constructor(
    private _http:Http
  ) { }

  index(callback){
    this._http.get('/question').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );    
  }

  create(newQuestion: NewQuestion, callback){
    this._http.post('/question', newQuestion).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
    
  }

  show(id: string , callback){
    this._http.get(`/question/${id}`).subscribe(
      res => callback(res.json()),
      err => console.log(err)
      
    );
  }

}
