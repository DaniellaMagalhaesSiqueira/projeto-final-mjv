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
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //mostrará apenas os usuários admin
    // this.userService.getUsers().subscribe(res => this.users = res)
    this.users = this.userService.getUsers().filter((u) => u.isAdmin === true);
  }

}
