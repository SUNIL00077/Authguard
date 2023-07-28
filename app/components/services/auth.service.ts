import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userval:any;
authguard=new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient,private router:Router) { }

  postsign(data:any){
    return this.http.post('http://localhost:3000/posts/',data)
  }

  logindata(data:any){
   this.http.get('http://localhost:3000/posts').subscribe(res =>{
      this.userval=res;
      const user= this.userval.find((a:any)=>{
        return a.email === data.email && a.password === data.password
      })
      if(user){
        this.authguard.next(true)
          this.router.navigate(['home'])
      }
  })
  }
}
