import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { MessageDialogComponent } from 'src/app/shared/dialogs/message-dialog/message-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  templateUrl: './create-admin-user-page.component.html',
  styleUrls: ['./create-admin-user-page.component.scss']
})
export class CreateAdminUserPageComponent implements OnInit {

  user: User = this.userService.getDefaultUser();
  adminForm!: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.adminForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthDate: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    const formValue = this.adminForm.value;
    console.log(this.adminForm.errors)
    this.user.isAdmin = true;
    this.user.name = formValue.name;
    this.user.email = formValue.email;
    this.user.birthDate = formValue.birthDate;
    this.user.cpf = formValue.cpf;
    this.user.password = formValue.cpf;
    this.userService.createUser(this.user);
    this.dialog.open(MessageDialogComponent, {
      data: {
        message: `Lembre-se! A senha do usuário administrador ${this.user.name} é o CPF cadastrado.`,
        titleMessage: `${this.user.name} é um Administrador`
      }
    });
    this.router.navigateByUrl('/users');
  }

}
