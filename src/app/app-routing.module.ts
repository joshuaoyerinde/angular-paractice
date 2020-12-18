import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { ValidFormComponent } from './valid-form/valid-form.component';
import { DataGuardGuard } from './data-guard.guard';


const routes: Routes = [
  {path: '', redirectTo: '/students', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'validForm', component:ValidFormComponent},
  {path: 'students', children: [
    {path: '', component: StudentComponent},
    {path: 'student-profile/:id', component: StudentProfileComponent, canActivate:[DataGuardGuard]},

  ]},
  // {path:'student-profile',component:StudentProfileComponent},
  {path: 'addstudent', component: AddstudentComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
