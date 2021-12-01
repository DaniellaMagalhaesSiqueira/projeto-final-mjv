
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/features/user/models/user.model';
import { UserService } from 'src/app/features/user/services/user.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  user?: User | null;

  constructor(
    private userService: UserService,
  ) { 
    this.userService.getLoggedUserStream().subscribe((loggedUser) => {
      this.user = loggedUser;
    });
  }

  ngOnInit(): void {

    if(this.userService.getLoggedUser()){
      this.user = this.userService.getLoggedUser();

    }
  }

}
