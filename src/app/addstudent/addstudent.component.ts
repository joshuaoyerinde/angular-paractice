import { Component, OnInit } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { Router } from '@angular/router';
import { PortalService } from '../portal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Form } from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css'],
  providers:[StudentComponent]
})
export class AddstudentComponent implements OnInit {
  firstname;
  email;
  latsname;
  phone;
  public studentid=[];
  public studentForm: FormGroup;
  // students;
  constructor(public stCop:StudentComponent,public routAdd:Router,public potal:PortalService,public formBuilder:FormBuilder ) { }


  ngOnInit() {
    this.studentForm=this.formBuilder.group({
      firstname: ['', Validators['required']],
      latsname: '',
      email: ['', Validators['email']],
      phone: ''
    })
    // console.log(this.students.push({firstname:this.firstname,email:this.email,lastname:this.lastname}));
  }




  addStudent(){
    let formValue = this.studentForm.value;
    if(this.studentForm.valid){
      console.log(formValue)
    }else{
      console.log("Invalid Form")
    }
    this.potal.submitStu(formValue).subscribe(details=>{
      details=this.studentid;
    })
      // let studentForm=new FormData();
    //     studentForm.append("firstname",this.firstname);
    //     studentForm.append("email",this.email);
    //     studentForm.append("latsname",this.latsname);
    //     studentForm.append("phone",this.phone);

    //     this.potal.submitStu(studentForm).subscribe(data=>{
    //       console.log(data)


    //     })

    // this.potal.getstudent().subscribe(data=>{
      // this.studentid=data;
    //   let details={firstname:this.firstname,email:this.email,latsname:this.latsname, phonenumber:this.phone};
    //   this.potal.submitStu(details).subscribe(data=>{
    //     // this.studentid=
    //     console.log(data);
    //   this.routAdd.navigate(['students']);
    // })
    this.routAdd.navigate(['/students/']);
  }





}
