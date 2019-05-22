import { Component, OnInit } from '@angular/core';
 import {NgForm} from '@angular/forms';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { Router } from '@angular/router';
import { Login } from '../login';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-isafe-login',
  templateUrl: './isafe-login.component.html',
  styleUrls: ['./isafe-login.component.css']
})
export class IsafeLoginComponent implements OnInit {
model: Login = { userid: "admin", password: "admin123" };
loginForm: FormGroup;
 message: string;
    
    returnUrl: string;
   constructor(private formBuilder: FormBuilder,private router: Router, public authService: AuthService) { }

   ngOnInit() {
   this.loginForm = this.formBuilder.group({
            userid: ['', Validators.required],
      password: ['', Validators.required]
        });
        this.returnUrl = '/signup';
    this.authService.logout();
   }
    get f() { return this.loginForm.controls; }
 login() {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    else{
      if(this.f.userid.value == this.model.userid && this.f.password.value == this.model.password){
        console.log("Login successful");
        //this.authService.authLogin(this.model);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f.userid.value);
        this.router.navigate([this.returnUrl]);
        
      }
      else{
             this.message = "Please check your userid and password";
      }
    }    
}
}


