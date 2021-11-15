import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/features/user/models/user.model';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  user?: User;

  constructor() { }

  ngOnInit(): void {
    const userStorage = sessionStorage.getItem('user');
    if(userStorage){
      this.user = JSON.parse(userStorage);
    }
  }

}
