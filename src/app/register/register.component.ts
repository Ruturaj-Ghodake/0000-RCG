import { Component, OnInit } from '@angular/core';
import { Hospital } from '../hospital';
import { User } from '../user';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { DoctorServiceService } from '../services/doctor-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public user:User;
  hospitalUser = new Hospital("My Hospital","My Hospital","My Hospital","My Hospital","My Hospital");

  registrationForm:FormGroup;
  constructor(private fb:FormBuilder, 
    private doctorService:DoctorServiceService) { }

  ngOnInit(): void {
    this.setTable();
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
    console.log(values.get('email'));
    // console.log(this.registrationForm.value);
    this.doctorService.createDoctorUser(this.registrationForm.value).subscribe(
      data =>{console.log(data)},
      error => console.log(error)
    );
  }

  get userProperty(){
    return this.registrationForm.get('fName');
  }

  get f(){
   return this.registrationForm;
  }

   regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;
   regexEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/; 
   regexMobile = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  setTable(){
    this.registrationForm = this.fb.group({
      title: [,Validators.required],
      fName:[,[Validators.required, Validators.minLength(2)]],
      lName:[,Validators.required],
      email:[,[Validators.required,Validators.pattern(this.regexEmail)]],
      password:[,[Validators.required, Validators.pattern(this.regexPassword)]],
      cPassword:[,Validators.required],
      mobileNo:[,[Validators.required, Validators.pattern(this.regexMobile)]],
      gender:[,Validators.required],
      selectedHName:[,Validators.required],
      address1:[,Validators.required],
      address2:[,Validators.required],
      address3:[,],
      state:[,Validators.required],
      district:[,Validators.required],
      city:[,Validators.required],
      specialist:[,Validators.required],
      doctorRegNo:[,Validators.required],
      stateCouncil:[,Validators.required]
    });
  }


}
