import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  signupform!:FormGroup;

constructor(private http:HttpClient,private authser:AuthService,private formBuilder:FormBuilder){}

  ngOnInit():void{
    this.signupform = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(data:any){
      this.authser.logindata(data)

   }
}
