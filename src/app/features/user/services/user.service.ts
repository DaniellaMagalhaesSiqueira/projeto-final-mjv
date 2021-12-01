import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { User } from './../models/user.model';


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
      cpf: '000.000.000-00',
      birthDate: '10/10/1990',
    },
    {
      id: 2,
      isAdmin: true,
      name: 'Vera Lúcia',
      email: 'veralucia@email.com',
      password: '123456',
      cpf: '000.000.000-00',
      birthDate: '10/10/1990',
    },
    {
      id: 3,
      isAdmin: false,
      name: 'Joana',
      email: 'joana@email.com',
      password: '123456',
      cpf: '000.000.000-00',
      birthDate: '10/10/1990',
    },
    {
      id: 4,
      isAdmin: true,
      name: 'Daniella',
      email: 'daniella@email.com',
      password: '123456',
      cpf: '000.000.000-00',
      birthDate: '10/10/1990',
    },
    {
      id: 5,
      isAdmin: true,
      name: 'Teste Admin',
      email: 'teste@email.com',
      password: '123456',
      cpf: '000.000.000-00',
      birthDate: '10/10/1990',
    },
  ]);


  constructor( ) { }

  getUsers(): User[]{
    return this.users.getValue();
  }

  getLoggedUser(): User | null {
    const userStorage = sessionStorage.getItem('user');
    if(userStorage){
      this.loggedUser.next(JSON.parse(userStorage));
    }
    return this.loggedUser.getValue();
  }

  editLoggedUser(user: User | null){
    this.loggedUser.next(user);
  }

  getUsersStream(): Observable<User[]>{
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
  }

  createUser(user: User){
    this.getUsers().push(user);
    this.users.next(this.getUsers())
  }

  removeUser(id: number){
    this.users.next(this.getUsers().filter((u)=> u.id !== id));
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.getUsers().find((u) => u.id === Number(id));
  }

  getUserByEmailAndPassword(email: string | undefined, password: string | undefined) {

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
    this.loggedUser.next(editedUser);
  }
}
