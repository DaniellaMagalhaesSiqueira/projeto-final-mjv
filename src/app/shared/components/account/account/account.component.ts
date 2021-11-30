import { UserService } from './../../../../features/user/services/user.service';
import { User } from './../../../../features/user/models/user.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user?: User | null;
  constructor(
    private router: Router,
    private userService: UserService,
    ) { }

  ngOnInit(): void {
    // const userStorage = sessionStorage.getItem('user');
    if(this.userService.getLoggedUser()){
      // this.user = JSON.parse(userStorage);
      this.user = this.userService.getLoggedUser();
    }
  }

  logout(){
    sessionStorage.clear();
    this.userService.editLoggedUser(null);
    this.router.navigateByUrl('login');
  }
}
