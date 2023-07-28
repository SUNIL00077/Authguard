import { Component } from '@angular/core';

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.css']
})

export class LocalstorageComponent {
  userval:any;
  lengt:any;

  store(){
    localStorage.setItem("user","sunil")
  }

  getstore(){
   this.userval= localStorage.getItem("user")
  }

  remove(){
    window.localStorage.removeItem("user")
  }

  clear(){
    this.userval=localStorage.clear()
  }

  length(){
     this.lengt=localStorage.length
  }


}
