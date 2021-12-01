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
    ) {
      this.userService.getLoggedUserStream().subscribe((user) =>{
        this.user = user;
      });
     }

  ngOnInit(): void {
    if(this.userService.getLoggedUser()){
      this.user = this.userService.getLoggedUser();
      this.userService.getLoggedUserStream().subscribe();

    }
  }

  logout(){
    sessionStorage.clear();
    this.userService.editLoggedUser(null);
    this.router.navigateByUrl('home');
  }
}
