import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllConsultationsPageComponent } from './features/consultation/pages/all-consultations-page/all-consultations-page.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'all-consultations', component: AllConsultationsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
