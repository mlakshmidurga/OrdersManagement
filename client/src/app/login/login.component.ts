import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
 import { Router } from '@angular/router';
import {NgForm } from '@angular/forms';
import { StateService } from '@uirouter/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginUserData = {}



  constructor(private auth: AuthService, private router:Router) { }

  onLogin(form: NgForm){
    if(form.invalid){
      return
  }
  else{
    this.auth.loginUser(this.loginUserData).subscribe(
      res => {
        this.router.navigate(['/home']);
        console.log(res)},
      err => console.log(err)
    )
  }

  }
  
  ngOnInit() {
  }

}
