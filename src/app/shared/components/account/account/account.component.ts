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
    if(this.userService.logedUser){
      // this.user = JSON.parse(userStorage);
      this.userService.logedUser.asObservable().subscribe(res => this.user = res);
    }
  }

  logout(){
    sessionStorage.clear();
    this.userService.logedUser.next(null);
    this.router.navigateByUrl('login');
  }
}
