import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doctor-nest';

  constructor(private router:Router){}

  login(){
    this.router.navigate(['./login']);
  }

  home(){
    this.router.navigate(['./']);
  }

  register(){
    this.router.navigate(['./register']);
  }

  about(){
    this.router.navigate(['./about']);
  }

  contact(){
    this.router.navigate(['./contact']);
  }
}
