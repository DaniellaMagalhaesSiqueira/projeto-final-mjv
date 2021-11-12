import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllConsultationsPageComponent } from './features/consultation/pages/all-consultations-page/all-consultations-page.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { SelfCreateUserPageComponent } from './features/user/pages/self-create-user-page/self-create-user-page.component';
import { UserPageComponent } from './features/user/pages/user-page/user-page.component';
import { AuthGuardGuard } from './shared/guard/auth-guard.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'home' },
  { path: 'home', component: HomePageComponent, },
  { path: 'login', component: LoginPageComponent },
  { path: 'all-consultations', component: AllConsultationsPageComponent },
  { path: 'users', component: UserPageComponent, canActivate: [AuthGuardGuard] },
  { path: 'self-create-user', component: SelfCreateUserPageComponent },
  // { path: 'admin', component: ,  canActivate: [ AuthGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
