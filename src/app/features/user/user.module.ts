
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { SelfCreateUserPageComponent } from './pages/self-create-user-page/self-create-user-page.component';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';
import { CreateAdminUserPageComponent } from './pages/create-admin-user-page/create-admin-user-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    UserComponent,
    UsersListComponent,
    UserPageComponent,
    SelfCreateUserPageComponent,
    EditUserPageComponent,
    CreateAdminUserPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,

  ]
})
export class UserModule { }
