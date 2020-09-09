import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';

import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { ListExamsComponent } from './list-exams/list-exams.component';
import { ExamQuestionsComponent } from './exam-questions/exam-questions.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { StudentComponent } from './student/student.component';
import { StudentExamListComponent } from './student-exam-list/student-exam-list.component';
import { StudentGiveExamComponent } from './student-give-exam/student-give-exam.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    RegisterComponent,
    ListStudentsComponent,
    StudentDetailComponent,
    ListExamsComponent,
    ExamQuestionsComponent,
    CreateExamComponent,
    AddQuestionsComponent,
    StudentComponent,
    StudentExamListComponent,
    StudentGiveExamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
