import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  basepath="http-request/";
  userUrl=this.basepath+"student.php";


  constructor(public http:HttpClient) { }
   public  studentlist = [
    // {id: '1', firstname: 'JOSHUA', latsname: 'OYETUNDE', phone_number: '090747456346346', email: 'joshua@gmail.com'},
    // {id: '2', firstname: 'KOLA', latsname: 'OLAWALE', phone_number: '090747456346346', email: 'joshua@gmail.com'},
    // {id: '3', firstname: 'OLAYIWOLA', latsname: 'PHODA', phone_number: '090747456346346', email: 'joshua@gmail.com'},
    // {id: '4', firstname: 'bamiloye', latsname: 'DAMILARE', phone_number: '090747456346346', email: 'joshua@gmail.com'},
    // {id: '5', firstname: 'OYEDAPO', latsname: 'DAMILARE', phone_number: '090747456346346', email: 'joshua@gmail.com'},
    // {id: '6', firstname: 'JHNSON', latsname: 'OLUWAFEMI', phone_number: '090747456346346', email: 'joshua@gmail.com'},
    // {id: '7', firstname: 'RINDEX', latsname: 'DAMILOLA', phone_number: '090747456346346', email: 'joshua@gmail.com'},
   ];

  // callEndpoint(){
    // return this.http.get('/http-request/student.php');
    // let  children=['josh','favor','marry'];
  //
  // }
  getstudent(){

    // return of(this.studentlist);
    return this.http.get<any>(this.userUrl);

  }
  submitStu(student){
    return this.http.post('/http-request/add-student.php',student);
    // this.studentlist.push(student)

  }
  deleteStu(id){
    // alert()
    return this.http.post('/http-request/delete.php',id);
    // let index= this.studentlist.findIndex(st=>st.id==id)
    // this.studentlist.splice(index,1)
  }

}
