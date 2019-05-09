import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {}

  constructor(private auth: AuthService, private router: Router) { }

  onRegister(form: NgForm){
    if(form.invalid){
      return
  }
   else{
    this.auth.registerUser(this.registerUserData).subscribe(
      res =>{
      this.router.navigate(['/orders']);
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
