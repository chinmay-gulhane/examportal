import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from './../service/exam/exam.service';
import { Questions} from './../list-exams/list-exams.component'

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  examName : String;
  questions : Questions[] = [];
  question : Questions;
  list = [] ;
  questionName : string;
  option1 : string;
  option2 : string;
  option3 : string;
  option4 : string;
  answer : string;
  examid : string;
  newquestion : boolean = false;
  count : number = 0;

  constructor(
    private route: ActivatedRoute,
    private service:ExamService
  ) { }

  ngOnInit(): void {
    this.examid = this.route.snapshot.params['id'];
    this.examName = this.route.snapshot.params['name'];
  }

  addQuestion(){
    this.list.push(this.list.length+1);
    this.newquestion = !this.newquestion;
  }

  onSubmit(){
    this.question = new Questions(0 , this.questionName ,this.option1 , this.option2 , this.option3 , this.option4 , this.answer ,this.examid );
    console.log(this.question);
    this.questions.push(this.question);
    console.log(this.questions)
   this.newquestion = !this.newquestion;

  }

  answerhandler(event : any){
    this.answer = event.target.value;

  }

  submitQuestions(){
    console.log("In submit questions")
    this.service.insertQuestions(this.questions)
    .subscribe(
      data => {
        console.log(data)
      }
    )
   }



  }
