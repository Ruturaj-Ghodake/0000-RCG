import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  private baseURL="http://localhost:9090/api/doctor";

  constructor(private httpClient:HttpClient) { }

  createDoctorUser(user :User): Observable<User>{
   return this.httpClient.post<User>(`${this.baseURL+'/'}`, user);
  }

}
