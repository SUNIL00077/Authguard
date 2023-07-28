import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services crud/employee.service';
import { UpdateComponent } from '../update/update.component';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  formvalue: any;
  AllData: any;
  constructor(public http: EmployeeService,public dialog: MatDialog) {
    this.formvalue = new FormGroup({
      name: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl(''),
      rollno: new FormControl(''),
    });
  }
  ngOnInit(): void {
    this.http.getdata().subscribe((res) => {
      this.AllData = res;
    });
  }

  postdata() {
    this.http.postemp(this.formvalue.value).subscribe((res) => {});
    console.log(this.formvalue.value);
  }
  deletedata(id: any) {
    this.http.deletedata(id.id).subscribe((res) => {});
  }
  openDialog(data:any) {
    this.dialog.open(UpdateComponent, {
      data: {
        name:data.name,
        lname:data.lname,
        email:data.email,
        rollno:data.rollno,
        id:data.id
      },
    });
  }



  }

