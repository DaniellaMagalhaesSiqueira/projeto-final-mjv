import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  error: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
