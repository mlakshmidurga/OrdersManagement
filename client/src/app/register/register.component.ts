import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
 import { Router } from '@angular/router';
import { StateService } from '@uirouter/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {}

  constructor(private auth: AuthService, private StateService: StateService) { }

  onRegister(form: NgForm){
    if(form.invalid){
      return
  }
   else{
    this.auth.registerUser(this.registerUserData).subscribe(
      res =>{
      this.StateService.go('orders');
        console.log(res)},
        err =>{
        console.log(err)
        }
    )
   }

  }
 
  ngOnInit() {
  }

}
