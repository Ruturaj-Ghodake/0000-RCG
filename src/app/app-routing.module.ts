import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IndexADateComponent } from './index-adate/index-adate.component';
import { LoginComponent } from './login/login.component';
import { PListComponent } from './p-list/p-list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'', component:IndexADateComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'about', component:AboutUsComponent
  },
  {
    path:'contact', component:ContactUsComponent
  },
  {
    path:'docHome', component:PListComponent, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
