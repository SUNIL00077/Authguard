import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatechildService } from './activatechild.service';

@Injectable({
  providedIn: 'root'
})
export class ActivatechildGuard implements CanActivateChild {
  constructor(private http:ActivatechildService,private router:Router){}
  canActivateChild() {
    if(this.http.ischildrights()){
      return true;
    }
    else{
      alert('You dont have access this child page')
      this.router.navigate(['customer'])
      return false;
    }
  }

}
