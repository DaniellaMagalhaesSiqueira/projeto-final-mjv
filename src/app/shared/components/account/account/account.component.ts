import { UserService } from './../../../../features/user/services/user.service';
import { User } from './../../../../features/user/models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user?: User
  constructor(
    private router: Router,
    private userService: UserService,
    ) { }

  ngOnInit(): void {
    const userStorage = sessionStorage.getItem('user');
    if(userStorage){
      this.user = JSON.parse(userStorage);
    }
  }

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl('home');
  }
}
