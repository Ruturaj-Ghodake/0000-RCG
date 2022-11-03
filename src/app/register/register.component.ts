import { Component, OnInit } from '@angular/core';
import { Hospital } from '../hospital';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user:User;
  hospitalUser = new Hospital("My Hospital","My Hospital","My Hospital","My Hospital","My Hospital");

  constructor() { }

  ngOnInit(): void {
  }

  hospitalForm:boolean=false;
  doctorForm:boolean=false;

  doctorFormSelection(value:string){
    if(value==="Doctor Signup"){
      console.log(value);
      this.doctorForm=true;
    }
  }


  hospitalFormSelection(value:string){
    if(value==="Hospital Signup"){
      this.hospitalForm=true;
    }
  }

  allValues(values:any){
    console.log(values);
  }

}
