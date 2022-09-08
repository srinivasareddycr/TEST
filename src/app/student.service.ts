import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import Student from './Entity/Student';

const BASE_URL = "http://localhost:7000/api/studentmanagement/student";
const GET_URL = "http://localhost:7000/api/studentmanagement/allstudents";
const DELETE_URL = "http://localhost:7000/api/studentmanagement/allstudents";


@Injectable({
  providedIn: 'root'
})

export class StudentService {
   UPDATE_URL = "http://localhost:7000/api/studentmanagement";

  createStudent(Student: {firstName:string;lastName:string;studentClass:string;subject:string;dob:Date}){
    return this.http.post(BASE_URL, Student);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getStudents() {
    return this.http.get(GET_URL);
  }
  constructor(public http : HttpClient) {}

  deleteStudent(student:any) {
    return this.http.delete(DELETE_URL);
  }

//   updateStudents(student:any) {
//     return this.http.put(UPDATE_URL, student);
   
// }

updateStudent(sId: number, student: Student): Observable<Student> {
  return this.http.put<Student>(this.UPDATE_URL + '/update/' + sId, JSON.stringify(student), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}


createTest(Student: {firstName:string;lastName:string;studentClass:string;subject:string;dob:Date}){
  return this.http.post(BASE_URL, Student);
}


 // Error handling 
 handleError(error: any){
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}
}