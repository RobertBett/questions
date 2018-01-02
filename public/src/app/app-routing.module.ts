import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionNewComponent } from './question-new/question-new.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { Component } from '@angular/core/src/metadata/directives';
import { AnswerNewComponent } from './answer-new/answer-new.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
    children: []
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: []
  },
  {
    path: 'create',
    component: QuestionNewComponent,
  },
  {
    path:'question/:id',
    component: QuestionListComponent,
  },
  {
    path: 'answer/:id',
    component: AnswerNewComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }