import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HardcodedAuthenticationService} from './../service/hardcoded-authentication.service';
import { WelcomeDataService } from './../service/data/welcome-data.service'
import { Student } from '../list-students/list-students.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String = '';
  password1 = '';
  errorMessage: String = 'Invalid Credientials';
  invalidLogin = false;
  student : Student[];

  //Router
  //Angular.giveMeRouter - old practice for routing
  //Dependency Inection - new practice for routing
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private service:WelcomeDataService
     ) { }

  ngOnInit(): void {
    this.service.fetchAllStudentService().subscribe(
      response=>{
        // console.log("todo component")
        console.log(response)
        this.student = response;
      }
       
    );
  }

  handleLogin() {
    // Write comparison of username pass word login here
    console.log("in handle login " +this.student[0].userName);
    // console.log(this.username);
  //  if (this.username === "chinmay" && this.password1 === 'dummy') {
    if (this.hardcodedAuthenticationService.authenticate(this.username , this.password1)) {
      //Redirect to Welcome page
      console.log("in if checking user" + this.username);
      if(this.username === 'admin')
      {
        this.router.navigate(['welcome' , this.username]);
      }
      else{
        this.router.navigate(['student']);
      }
      
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }
  }


}
