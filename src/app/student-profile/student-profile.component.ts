import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentComponent } from '../student/student.component';
import { PortalService } from '../portal.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css'],
  providers: [StudentComponent]
})
export class StudentProfileComponent implements OnInit {

  constructor(public actRout: ActivatedRoute, public stuComp: StudentComponent,public potal:PortalService) { }
  public id;
  public student;

  ngOnInit() {
    this.potal.getstudent().subscribe(data=>{
      let view = data;
      // this.student=JSON.parse(JSON.stringify(view));
      this.student=data;
      console.log(this.student);
      this.id = this.actRout.snapshot.params.id;

      let thisStudent = view.filter(s => s.id == this.id);
      console.log(thisStudent);
      this.student =thisStudent[0];

    })
  }

}
