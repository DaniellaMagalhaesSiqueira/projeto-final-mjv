import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User> = [
    {
      id: 1,
      isAdmin: true,
      name: 'Ionne',
      email: 'ionne@email.com',
      password: '123456'
    },
    {
      id: 2,
      isAdmin: true,
      name: 'Vera Lúcia',
      email: 'veraluciae@email.com',
      password: '123456'
    },
    {
      id: 3,
      isAdmin: false,
      name: 'Joana',
      email: 'joana@email.com',
      password: '123456'
    },
    {
      id: 4,
      isAdmin: true,
      name: 'Ionne',
      email: 'ionne@email.com',
      password: '123456'
    },
    {
      id: 5,
      isAdmin: true,
      name: 'Vera Lúcia',
      email: 'veraluciae@email.com',
      password: '123456'
    },
    {
      id: 6,
      isAdmin: false,
      name: 'Joana',
      email: 'joana@email.com',
      password: '123456'
    },
    {
      id: 7,
      isAdmin: true,
      name: 'Ionne',
      email: 'ionne@email.com',
      password: '123456'
    },
    {
      id: 8,
      isAdmin: true,
      name: 'Vera Lúcia',
      email: 'veraluciae@email.com',
      password: '123456'
    },
    {
      id: 9,
      isAdmin: false,
      name: 'Joana',
      email: 'joana@email.com',
      password: '123456'
    },
    {
      id: 10,
      isAdmin: true,
      name: 'Ionne',
      email: 'ionne@email.com',
      password: '123456'
    },
    {
      id: 11,
      isAdmin: true,
      name: 'Vera Lúcia',
      email: 'veraluciae@email.com',
      password: '123456'
    },
    {
      id: 12,
      isAdmin: false,
      name: 'Joana',
      email: 'joana@email.com',
      password: '123456'
    },
   
  ];
  constructor() { }

  getUsers(){
    return this.users;
  }

  getDefaultUser(): User{
    return {
      id: this.generateNextId(),
      name: '',
      email: '',
      isAdmin: false,
      password: '',
    }
  }
  generateNextId(): number {
    return this.users[(this.users.length - 1)].id + 1;
  }

  createUser(user: User){
    this.users.push(user);
    return this.users;
  }

  removeUser(id: number) {
    const userIndexFinded = this.users.findIndex((user) => user.id === id);
    if(userIndexFinded){
      this.users.splice(userIndexFinded, 1);
    }
  }

  getUserById(id: number){
    return this.users.find((user) => user.id === Number(id));
  }

  getUserByEmailAndPassword(email: string | undefined, password: string | undefined) {
    return this.users.find((user) => user.email === email && user.password === password);
  }
}
