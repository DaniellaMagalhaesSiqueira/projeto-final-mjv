import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users!: Array<User>;
  constructor(private userService: UserService) { 
    this.userService.getUsersStream().subscribe((users) =>{
      this.users = users.filter((u) => u.isAdmin === true);;
    });
  }

  ngOnInit(): void {

    this.users = this.userService.getUsers().filter((u) => u.isAdmin === true);
  }

}
