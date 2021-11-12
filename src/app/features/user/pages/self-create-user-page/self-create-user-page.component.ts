import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageDialogComponent } from 'src/app/shared/dialogs/message-dialog/message-dialog.component';
import { MustMatch } from 'src/app/shared/validators/string-validator.validator';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './self-create-user-page.component.html',
  styleUrls: ['./self-create-user-page.component.scss']
})
export class SelfCreateUserPageComponent implements OnInit {

  user: User = this.userService.getDefaultUser();

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    ){}
    
 
    
    userForm: FormGroup = this.formBuilder.group({
    name: new FormControl('',[
      Validators.required, 
      Validators.minLength(5),
      Validators.maxLength(150)]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.required,
      ]),
      confirmPassword: new FormControl(''),
  },
    {validator: MustMatch('password', 'confirmPassword')}
  );


  ngOnInit(): void {
    
  }
  
  onSubmit(){
    const formValue = this.userForm.value;
    this.user.name = formValue.name;
    this.user.email = formValue.email;
    this.user.password = formValue.password;
    this.user.isAdmin = false;
    this.userService.createUser(this.user);
     this.dialog.open(MessageDialogComponent, {
       data: {
         message: 'Conta criada com sucesso!',
         titleMessage: 'Sucesso!'
       }
     });
    this.router.navigateByUrl('/users');

  }


}
