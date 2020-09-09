import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'
import {Exam, Questions} from 'src/app/list-exams/list-exams.component'

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(
    private http: HttpClient
  ) { }

  fetchAllExamsService(){
    return this.http.get<Exam[]>('http://localhost:8080/api/exam')
  }

  fetchQuestionsByExamIdService(id){

    return this.http.get<Questions>(`http://localhost:8080/api/questions/`+id)
   // console.log("Execute Hello World bean service");
  }

  insertExam(Exam){
    return this.http.post<Exam>(
      'http://localhost:8080/api/exam' , Exam);

  }



  insertQuestions(Questions){
    return this.http.post<Questions[]>(
      'http://localhost:8080/api/question/list' , Questions);

  }
}
