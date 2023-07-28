import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services crud/employee.service';
export interface DialogData {
  id: any;
  name: any;
  lname: any;
  email: any;
  rollno: any;
}
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
  formvalue: any;
  constructor( @Inject(MAT_DIALOG_DATA) public data: DialogData, private http:EmployeeService ) {
    this.formvalue = new FormGroup({
      'name': new FormControl(''),
      'lname': new FormControl(''),
      'email': new FormControl(''),
      'rollno': new FormControl(''),
    })
  }
  update() {
    this.http.Update(this.data.id,this.formvalue.value).subscribe((res) =>{

    });

    // console.log(this.data.id);
  }
}

