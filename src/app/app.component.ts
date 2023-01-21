import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorServiceService } from './services/doctor-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'doctor-nest';

  isLogin=false;

  constructor(private router:Router , private docService:DoctorServiceService){}

  ngOnInit(): void {
    this.isLogin= this.docService.isLoggedIn();
  }

  logoutUser(){
    debugger;
    this.docService.logout();
    location.reload();
  }


}
