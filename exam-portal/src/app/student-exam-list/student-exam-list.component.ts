import { Component, OnInit } from '@angular/core';
import { ExamService } from './../service/exam/exam.service';
import { Router } from '@angular/router';
import {Exam} from '../list-exams/list-exams.component'


@Component({
  selector: 'app-student-exam-list',
  templateUrl: './student-exam-list.component.html',
  styleUrls: ['./student-exam-list.component.css']
})
export class StudentExamListComponent implements OnInit {
  exam : Exam[] ;
  constructor(
    private router: Router,
    private service:ExamService
  ) { }

  ngOnInit(): void {
    this.service.fetchAllExamsService().subscribe(
      response=>{

        this.exam = response;
        console.log(response)
      }
     )
  }

  fetchExam(id){
    console.log(id);
    this.router.navigate(['studentappear',id])
    // this.service.fetchStudentByIdService(id).subscribe(
    //   response=>{
    //     console.log(response)
    //   }
    // )
    

  }

}
