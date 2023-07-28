import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor(private formBuilder:FormBuilder,private http:AuthService,private router:Router) {}
  signupform!:FormGroup;

  ngOnInit():void{
    this.signupform = this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      password:['',Validators.required]
    })
  }

  signup(data:any){
   this.http.postsign(data).subscribe(res =>{
   })
  this.router.navigate(['login'])
  }
}
