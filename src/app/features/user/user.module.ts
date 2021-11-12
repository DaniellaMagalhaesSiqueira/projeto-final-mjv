import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { SelfCreateUserPageComponent } from './pages/self-create-user-page/self-create-user-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserComponent,
    UsersListComponent,
    UserPageComponent,
    SelfCreateUserPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
