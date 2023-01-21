import { Component, OnInit } from '@angular/core';
import { DoctorServiceService } from '../services/doctor-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private docService:DoctorServiceService) { }

  ngOnInit(): void {
  }

  docLogin(){
    if((this.docLoginValues.username!=''&& this.docLoginValues.password!='')
    && (this.docLoginValues.username!=null && this.docLoginValues.password!=null)){
      console.log("login");
      this.docService.generateToken(this.docLoginValues).subscribe(
        (response:any)=>{
          console.log(response.token);
          this.docService.loginUser(response.token);
          window.location.href="/docHome";
        },
        error=>{
          console.log(error);
        }
      )
    }else{
      console.log('fields are empty');
    }
  }

  docLoginValues={
    username :'',
    password :''
  }

}
