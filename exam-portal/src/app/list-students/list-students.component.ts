import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';
import { WelcomeDataService } from './../service/data/welcome-data.service'
import { Router } from '@angular/router';

export class Student {
  constructor(
    public id:number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public userName: string,
    public password: string
    
    ){}
}

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  student : Student[];

  constructor( private router: Router,
    private service:WelcomeDataService) {
    
   }

  ngOnInit(): void {
    this.service.fetchAllStudentService().subscribe(
      response=>{
        // console.log("todo component")
        // console.log(response)
        this.student = response;
      }
       
    );
  }

  fetchStudent(id){
    this.router.navigate(['studentdetail',id])
 

  }


   // this.service.fetchStudentByIdService(id).subscribe(
    //   response=>{
    //     console.log(response)
    //   }
    // )
    
  

  updateTodo(id){
    console.log(`update${id}`)
  }

}
