import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'
import {Student} from 'src/app/list-students/list-students.component'



@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
   private http: HttpClient
  ) { }

  fetchAllStudentService(){
    return this.http.get<Student[]>('http://localhost:8080/api/employees')
  }

  fetchStudentByIdService(id){

    return this.http.get<Student>(`http://localhost:8080/api/employees/`+id)
   // console.log("Execute Hello World bean service");
  }

  fetchStudentByUsername(username){

    return this.http.get<Student>(`http://localhost:8080/api/employees/user/`+username)
   // console.log("Execute Hello World bean service");
  }

  insertStudent(Student){
    return this.http.post<Student>(
      'http://localhost:8080/api/employees' , Student);

  }
}
