
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/features/user/services/user.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  error: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    ) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[ Validators.required]),
  });
  

  ngOnInit(): void {
  }

  //sessionStorage e localStorage

  onSubmit(){
    const user = this.userService.getUserByEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password);
    console.log(user);
    if(!user){
      this.error = true;
    }else{
      sessionStorage.setItem('user', JSON.stringify(user));
      this.router.navigateByUrl('home');
    }
  }


}




