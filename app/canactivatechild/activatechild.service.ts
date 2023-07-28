import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivatechildService {

  constructor() { }

  ischildrights():boolean{
    return false;
  }
}
