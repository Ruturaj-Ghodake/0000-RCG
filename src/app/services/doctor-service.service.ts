import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  private baseURL="http://doctornest.co.in:8080";

  constructor(private httpClient:HttpClient) { }

  createDoctorUser(user :User): Observable<User>{
   return this.httpClient.post<User>(`${this.baseURL+'/'}`, user);
  }

  generateToken(docLoginValues:any){
    return this.httpClient.post(`${this.baseURL + '/token'}`,docLoginValues);
  }


  //jwt token and login
  loginUser(token){
    sessionStorage.setItem("token",token);
    return true;
  }

  isLoggedIn(){
    let value= sessionStorage.getItem('token');
    if(value===undefined || value==='' || value===null){
      return false;
    }
    else{
      return true;
    }
  }

  logout(){
    sessionStorage.removeItem("token");
    return true;
  }

  getToken(){
    return sessionStorage.getItem("token");
  }

}
