import { Component, OnInit, assertPlatform } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.css']
})
export class ValidFormComponent implements OnInit {

  constructor(public form:FormBuilder) { }
  submitted=false;
  thanks=false;
  regData=this.form.group({
    email:['',[Validators.required, Validators.email]],
    phone:['',Validators.required],
    password:['',Validators.required],
    name:['',Validators.required],
  });

  get myname(){return this.regData.get('name');}
  get myemail(){return this.regData.get('email');}
  get mypassword(){return this.regData.get('password');}
  get myphone(){return this.regData.get('phone');}

  submitForm(){
  //  this.correct=true;
  //  setTimeout(()=>{
    //  this.correct=false;
    //  alert("ihofhiwehfihio");
  //  },3000)
  this.submitted=true;
  setTimeout(()=>{
    this.submitted=false;
    this.thanks=true;
    this.regData.reset();
  },3000)
  setTimeout(()=>{
    // this.submitted=false;
    this.thanks=true;
    // this.regData.reset();
  },3000)
  }
  ngOnInit() {
  }

}
