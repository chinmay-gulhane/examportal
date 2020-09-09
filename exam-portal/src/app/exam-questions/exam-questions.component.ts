import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from './../service/exam/exam.service';
import { Questions} from './../list-exams/list-exams.component'




@Component({
  selector: 'app-exam-questions',
  templateUrl: './exam-questions.component.html',
  styleUrls: ['./exam-questions.component.css']
})
export class ExamQuestionsComponent implements OnInit {
  id: number;
  questions : Questions;


  constructor(
    private route: ActivatedRoute,
    private service:ExamService
  ) {
    
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("In exam questions " + this.id);


    this.service.fetchQuestionsByExamIdService(this.id).subscribe(
      // data => this.employee = data
        response=>{
          // console.log("exams detail component")
           console.log(response)
           this.questions = response
        
       }
 
     )
  }

}
