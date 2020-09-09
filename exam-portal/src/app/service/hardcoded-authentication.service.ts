import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate( username, password){
    console.log('before login isuserloggedin ' + username + password);
    if (username === 'admin' && password === 'dummy') { 
      sessionStorage.setItem('authenticatedUser',username);
      //console.log('After login isuserloggedin ' + this.isUserLoggedIn())
      return true;
    }

    else if(username === 'chinmay' && password === 'chinmay'){
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    }

    return false;

  }

  isUserLoggedIn(){
    let user =  sessionStorage.getItem('authenticatedUser');
    if(user === 'admin'){
      return true;
    }
    else{
      return false;
    }
  }
  isStudentLoggedIn(){
    let user =  sessionStorage.getItem('authenticatedUser');
    if(user === 'chinmay')
    return true;

    else
    return false;
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
