import { Component, OnInit } from '@angular/core';
import { ExamService } from './../service/exam/exam.service';
import { Router } from '@angular/router';

export class Exam {
  constructor(
    public id:number,
    public examName: string,
    public examDescription: string
    ){}
}

export class Questions{
  constructor(
    public id:number,
    public questionName: string,
    public option1: string,
    public option2: string,
    public option3: string,
    public option4: string,
    public answer: string,
    public examid: string
  ){}
}


@Component({
  selector: 'app-list-exams',
  templateUrl: './list-exams.component.html',
  styleUrls: ['./list-exams.component.css']
})
export class ListExamsComponent implements OnInit {

  exam : Exam[] ;
  constructor( private router: Router,
    private service:ExamService) {
    
   }

   ngOnInit(): void {
     this.service.fetchAllExamsService().subscribe(
      response=>{

        this.exam = response;
        //console.log(response)
      }
     )
  }

  fetchExam(id){
    console.log(id);
    this.router.navigate(['questions',id])
    // this.service.fetchStudentByIdService(id).subscribe(
    //   response=>{
    //     console.log(response)
    //   }
    // )
    

  }

  createNewExam(){
    this.router.navigate(['create'])

  }

  addQuestions(id , name){
    this.router.navigate(['addquestions',id , name])
  }



}
