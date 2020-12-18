import { Component, OnInit } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { Router } from '@angular/router';
import { PortalService } from '../portal.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [StudentComponent]
})
export class HomeComponent implements OnInit {
  public id;
  public studentNote;
  constructor(public stComp: StudentComponent, public routerGoStuProfile: Router,public potal:PortalService ) { }

  ngOnInit() {

    this.studentNote = this.potal.studentlist[0];
  }
  validateTo(student_id) {
    this.routerGoStuProfile.navigate(['/students/student-profile/' + student_id]);
  }
}
