import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { User } from './../models/user.model';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedUser = new BehaviorSubject<User | null> (null);

  private users = new BehaviorSubject<User[]>([
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
  ]);


  constructor( ) { }

  getUsers(): User[]{
    return this.users.getValue();
  }

  getLoggedUser(): User | null {
    return this.loggedUser.getValue();
  }

  getUserStream(): Observable<User[]>{
    return this.users.asObservable();
  }

  getLoggedUserStream(): Observable<User | null>{
    return this.loggedUser.asObservable();
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
  generateNextId(): number{

    return this.getUsers()[(this.getUsers().length - 1)].id + 1;

    //return this.user[(this.user.length - 1)].id + 1;

  }

  createUser(user: User){
    // this.users.push(user);
    return this.users.subscribe(users => users.push(user));
  }

  removeUser(id: number){

    this.users.next(this.getUsers().filter((u)=> u.id !== id));
    //  this.users = this.users.filter((u) => u.id !== id);
    
    // return this.users.pipe(
    //   map(users => users.filter((u)=> u.id !== id))
    // );
  }

  getUserById(id: number): User | undefined {
    // let user: User | undefined = this.getDefaultUser();
    // return this.users.find((user) => user.id === Number(id));
    // this.users.subscribe(users => user = users.find((u) => u.id === Number(id)));
    // return user;
    return this.getUsers().find((u) => u.id === Number(id));
  }

  getUserByEmailAndPassword(email: string | undefined, password: string | undefined) {
    // let user: User | undefined = this.getDefaultUser();
    // this.users.subscribe(users => user = users.find((u) => u.email === email && u.password === password));
    // return this.users.find((user) => user.email === email && user.password === password);
    return this.getUsers().find((user) => user.email === email && user.password === password);
  }

  editUser(user: User){
    const editedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      password: user.password,
      cpf: user.cpf,
      birthDate: user.birthDate,
    };  
    this.removeUser(user.id);
    this.createUser(editedUser);
  }
}
