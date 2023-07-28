import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http:HttpClient) { }

  postemp(data:any)
  {
    return this.http.post('http://localhost:3000/comments/',data)
  }
getdata()
{
  return this.http.get('http://localhost:3000/comments/')
}
deletedata(id:any)
{
  return this.http.delete('http://localhost:3000/comments/'+id)
}
Update(id:any,data:any){
  return this.http.put('http://localhost:3000/comments/'+id,data)

} 
}

