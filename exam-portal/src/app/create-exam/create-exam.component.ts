import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ExamService } from './../service/exam/exam.service';
import { Questions, Exam} from './../list-exams/list-exams.component';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {
  exam : Exam
  examName : string
  examDescription : string
  examid;
  examcreated : boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service:ExamService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.exam = new Exam( 0 , this.examName , this.examDescription);
    console.log(this.exam);
    // this.register = true;
     this.saveExam(); 
     this.examcreated = !this.examcreated; 
  //  this.router.navigate(['login'])
  
    

  }


  saveExam(){
    this.service.insertExam(this.exam)
    .subscribe(
      data => {
        // console.log("data" + data);
        this.examid = data.id;
        // console.log("in data " + this.examid);
      }
    )
    
 }

 onSubmit2(){
  this.addQuestions(this.examid , this.examName)
 }
 addQuestions(id , name){
  this.router.navigate(['addquestions',id , name])
 }



}
