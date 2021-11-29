import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { User } from './../models/user.model';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  logedUser = new BehaviorSubject<User | null> (null);

  users: Array<User> = [
    {
      id: 1,
      isAdmin: true,
      name: 'Ionne',
      email: 'ionne@email.com',
      password: '123456',
      cpf: '000-000-000-00',
      birthDate: '10/10/1990',
    },
    {
      id: 2,
      isAdmin: true,
      name: 'Vera Lúcia',
      email: 'veralucia@email.com',
      password: '123456',
      cpf: '000-000-000-00',
      birthDate: '10/10/1990',
    },
    {
      id: 3,
      isAdmin: false,
      name: 'Joana',
      email: 'joana@email.com',
      password: '123456',
      cpf: '000-000-000-00',
      birthDate: '10/10/1990',
    },
    {
      id: 4,
      isAdmin: true,
      name: 'Daniella',
      email: 'daniella@email.com',
      password: '123456',
      cpf: '123.123.123-12',
      birthDate: '10/10/1990',
    },
    {
      id: 5,
      isAdmin: true,
      name: 'Teste Admin',
      email: 'teste@email.com',
      password: '123456',
      cpf: '000-000-000-00',
      birthDate: '10/10/1990',
    },
    // {
    //   id: 6,
    //   isAdmin: false,
    //   name: 'Maria',
    //   email: 'maria@email.com',
    //   password: '123456',
    //   cpf: '000-000-000-00',
    //   birthDate: '10/10/1990',
    // },
    // {
    //   id: 7,
    //   isAdmin: true,
    //   name: 'Ionne',
    //   email: 'ionne@email.com',
    //   password: '123456',
    //   cpf: '000-000-000-00',
    //   birthDate: '10/10/1990',
    // },
    // {
    //   id: 8,
    //   isAdmin: true,
    //   name: 'Vera Lúcia',
    //   email: 'veraluciae@email.com',
    //   password: '123456',
    //   cpf: '000-000-000-00',
    //   birthDate: '10/10/1990',
    // },
    // {
    //   id: 9,
    //   isAdmin: false,
    //   name: 'Ana',
    //   email: 'ana@email.com',
    //   password: '123456',
    //   cpf: '000-000-000-00',
    //   birthDate: '10/10/1990',
    // },
    // {
    //   id: 10,
    //   isAdmin: true,
    //   name: 'Ionne',
    //   email: 'ionne@email.com',
    //   password: '123456',
    //   cpf: '000-000-000-00',
    //   birthDate: '10/10/1990',
    // },
    // {
    //   id: 11,
    //   isAdmin: true,
    //   name: 'Vera Lúcia',
    //   email: 'veraluciae@email.com',
    //   password: '123456',
    //   cpf: '000-000-000-00',
    //   birthDate: '10/10/1990',
    // },
  ];


  constructor( ) { }

  getUsers(): Observable<User[]>{
    return of(this.users);
  }

  getDefaultUser(): User{
    return {
      id: this.generateNextId(),
      name: '',
      email: '',
      isAdmin: false,
      password: '',
      cpf: '000-000-000-00',
      birthDate: '10/10/1990',
    };  
  }
  generateNextId(): number {
    return this.users[(this.users.length - 1)].id + 1;
  }

  createUser(user: User){
    this.users.push(user);
    return this.users;
  }

  removeUser(id: number){
     this.users = this.users.filter((u) => u.id !== id);
     return this.users;
  }

  getUserById(id: number){
    return this.users.find((user) => user.id === Number(id));
  }

  getUserByEmailAndPassword(email: string | undefined, password: string | undefined) {
    return this.users.find((user) => user.email === email && user.password === password);
  }

  editUser(user: User){
    this.removeUser(user.id);
    this.createUser(user);
  }
}
