
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllArticlesPageComponent } from './features/article/pages/all-articles-page/all-articles-page.component';
import { ArticleDetailPageComponent } from './features/article/pages/article-detail-page/article-detail-page.component';
import { CreateArticlePageComponent } from './features/article/pages/create-article-page/create-article-page.component';
import { AllConsultationsPageComponent } from './features/consultation/pages/all-consultations-page/all-consultations-page.component';
import { CreateConsultationComponent } from './features/consultation/pages/create-consultation/create-consultation.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { LayoutPageComponent } from './features/layout/pages/layout-page/layout-page.component';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { CreateAdminUserPageComponent } from './features/user/pages/create-admin-user-page/create-admin-user-page.component';
import { EditUserPageComponent } from './features/user/pages/edit-user-page/edit-user-page.component';
import { SelfCreateUserPageComponent } from './features/user/pages/self-create-user-page/self-create-user-page.component';
import { UserPageComponent } from './features/user/pages/user-page/user-page.component';
import { AuthGuardGuard } from './shared/guard/auth-guard.guard';

const routes: Routes = [
  {
    path: '', component: LayoutPageComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomePageComponent, },
      { path: 'login', component: LoginPageComponent },
      { path: 'all-consultations', component: AllConsultationsPageComponent },
      { path: 'edit-user', component: EditUserPageComponent },
      { path: 'all-articles', component: AllArticlesPageComponent },
      { path: 'article-detail/:id', component: ArticleDetailPageComponent },
      { path: 'self-create-user', component: SelfCreateUserPageComponent },
    ]
  },
  { path: 'users', component: UserPageComponent, canActivate: [AuthGuardGuard] },
  { path: 'create-admin-user', component: CreateAdminUserPageComponent, canActivate: [AuthGuardGuard] },
  { path: 'create-article', component: CreateArticlePageComponent, canActivate: [AuthGuardGuard] },
  { path: 'create-consultation', component: CreateConsultationComponent, canActivate: [AuthGuardGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
