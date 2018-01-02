import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Answer } from './answer';

@Injectable()
export class AnswerService {

  constructor(
    private _http:Http
  ) { }

  createAnswer(answer, question_id, callback){
    console.log('im in answer services')
    console.log(answer)
    this._http.post('/answer/'+ question_id, answer).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }  
  update(id:string, callback){
    console.log('im in the update function')
    this._http.put(`/answers/${id}`, {}).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }
  show(id: string , callback){
    this._http.get(`/answer/${id}`).subscribe(
      res => callback(res.json()),
      err => console.log(err)
      
    );
  }
}
