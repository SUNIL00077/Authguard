import { Component } from '@angular/core';

@Component({
  selector: 'app-sessionstorage',
  templateUrl: './sessionstorage.component.html',
  styleUrls: ['./sessionstorage.component.css']
})
export class SessionstorageComponent {
userval:any;
lengt:any;
  store(){
    sessionStorage.setItem("user","sunil")
  }

  getstore(){
   this.userval= sessionStorage.getItem("user")
  }

  remove(){
    window.sessionStorage.removeItem("user")
  }

  clear(){
    this.userval=sessionStorage.clear()
  }

  length(){
    this.lengt=localStorage.length
 }
}
