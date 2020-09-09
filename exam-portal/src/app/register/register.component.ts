import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from './../service/data/welcome-data.service'
import {Student} from 'src/app/list-students/list-students.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register : boolean = false;
  e : Student;
  firstname : string;
  lastname : string;
  email : string;
  userName : string;
  password: string;

  constructor( private router: Router,
    private service:WelcomeDataService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.e = new Student(0 , this.firstname , this.lastname , this.email ,this.userName , this.password);
    console.log(this.e);
    this.register = true;
    this.saveStudent();  
  //  this.router.navigate(['login'])
    

  }

  saveStudent(){
    this.service.insertStudent(this.e)
    .subscribe(
      data => {
        console.log(data)
      }
    )

  }

}
