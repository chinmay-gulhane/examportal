import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import {RouteGuardService} from './service/route-guard.service';
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


// welcome
const routes: Routes = [

  {path:'',component: LoginComponent},
  {path:'login',component: LoginComponent},
  // {path:'welcome/:name',component: WelcomeComponent , canActivate: [RouteGuardService]},
  // {path:'students',component: ListStudentsComponent , canActivate: [RouteGuardService] },
  // {path:'logout',component: LogoutComponent , canActivate: [RouteGuardService]},
  // {path:'studentdetail/:id',component: StudentDetailComponent , canActivate: [RouteGuardService]},
  // {path:'exams',component: ListExamsComponent , canActivate: [RouteGuardService]},
  // {path:'questions/:id',component: ExamQuestionsComponent , canActivate: [RouteGuardService]},
  // {path:'create',component: CreateExamComponent  , canActivate: [RouteGuardService]},
  // {path:'addquestions/:id/:name',component: AddQuestionsComponent  , canActivate: [RouteGuardService]},
  {path:'welcome/:name',component: WelcomeComponent },
  {path:'students',component: ListStudentsComponent  },
  {path:'logout',component: LogoutComponent },
  {path:'studentdetail/:id',component: StudentDetailComponent },
  {path:'exams',component: ListExamsComponent },
  {path:'questions/:id',component: ExamQuestionsComponent },
  {path:'create',component: CreateExamComponent  },
  {path:'addquestions/:id/:name',component: AddQuestionsComponent  },
  {path:'register',component: RegisterComponent},
  {path:'student',component: StudentComponent},
  {path:'studentexamlist',component: StudentExamListComponent},
  {path:'studentappear/:id',component: StudentGiveExamComponent},
  {path:'**',component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
