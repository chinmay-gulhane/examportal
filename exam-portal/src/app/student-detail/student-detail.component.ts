import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from './../service/data/welcome-data.service'
import { Student } from '../list-students/list-students.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  id: number;
  student : Student;

  constructor(
    private service:WelcomeDataService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("In studetn detail" + this.id)
    this.service.fetchStudentByIdService(this.id).subscribe(
     // data => this.employee = data
      response=>{
        console.log("todo component")
        console.log(response)
        this.student = response;
      }

    )
  }

 

}
