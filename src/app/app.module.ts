import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ValidFormComponent } from './valid-form/valid-form.component';
import { ThousandPipe } from './thousand.pipe';
import { CheckerPipe } from './checker.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    AddstudentComponent,
    NotfoundComponent,
    StudentProfileComponent,
    ValidFormComponent,
    ThousandPipe,
    CheckerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
