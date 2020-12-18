import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortalService } from '../portal.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public  students = [];
  constructor(public router: Router, public potal: PortalService) { }

  ngOnInit() {
     this.loadstudent()
  }
  loadstudent(){
    this.potal.getstudent().subscribe(data=>{
      let st = data;
      this.students=JSON.parse(JSON.stringify(st));
  });

  }
  viewstudent(student_id) {
    this.router.navigate(['/students/student-profile/'   + student_id]);
    // console.log( this.router.navigate(['/students/student-profile/' + student_id]));
  }
  removeStu(value) {
    this.potal.deleteStu(value).subscribe(data=>{
      // let del=data;
      // this.students=JSON.parse(JSON.stringify(del));
      this.loadstudent()
    });

  }
}
