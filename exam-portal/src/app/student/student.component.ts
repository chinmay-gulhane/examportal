import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from './../service/data/welcome-data.service'
import { Student } from '../list-students/list-students.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  username : String;
  student : Student;

  constructor(
    private service:WelcomeDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.username =  sessionStorage.getItem('authenticatedUser');
    console.log("In student detail " + this.username)
    this.service.fetchStudentByUsername(this.username).subscribe(
     // data => this.employee = data
      response=>{
        console.log("todo component")
        console.log(response)
        this.student = response;
      }

    )
  }

}
