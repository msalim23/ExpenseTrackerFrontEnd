import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from './model/IUser';
import {IExpense} from './model/IExpense';

@Injectable()
export class UserService {

  url = 'http://localhost:8080/user';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url + '/getAll');
  }

  addUsers(user: IUser): Observable<any> {
    return this.http.post(this.url + '/create', user);
  }

  addExpense(expense: IExpense, id: string): Observable<any> {
    return this.http.put(this.url + '/addExpense/' + id , expense);
  }

  getUsersById(id: string): Observable<IUser> {
    return this.http.get<IUser>(this.url + '/get/' + id);
  }

  deleteExpense(idUser: string, idExpense: string): Observable<any> {
    return this.http.delete(this.url + '/deleteExpense/' + idUser + '/' + idExpense);
  }
}
