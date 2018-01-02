import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './user.service';
import { QuestionNewComponent } from './question-new/question-new.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { AnswerNewComponent } from './answer-new/answer-new.component';
import { QuestionService } from './question.service';
import { AnswerService } from './answer.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    FilterPipe,
    AppComponent,
    LoginComponent,
    DashboardComponent,
    QuestionNewComponent,
    QuestionListComponent,
    AnswerNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    QuestionService,
    AnswerService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }