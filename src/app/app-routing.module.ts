
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllConsultationsPageComponent } from './features/consultation/pages/all-consultations-page/all-consultations-page.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { CreateAdminUserPageComponent } from './features/user/pages/create-admin-user-page/create-admin-user-page.component';
import { EditUserPageComponent } from './features/user/pages/edit-user-page/edit-user-page.component';
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
  { path: 'edit-user', component: EditUserPageComponent },
  { path: 'create-admin-user', component: CreateAdminUserPageComponent },
  // 'article-detail/:id'
 
  // { path: 'admin', component: ,  canActivate: [ AuthGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
