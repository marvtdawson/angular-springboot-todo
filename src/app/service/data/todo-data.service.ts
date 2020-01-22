import { Injectable } from '@angular/core';
import {HelloWorldBean} from './welcome-data.service';
import {HttpClient} from '@angular/common/http';
import {ListTodosComponent} from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  // http://localhost:8080/hello-world-bean
  retrieveAllTodos(username) {
    return this.http.get<ListTodosComponent[]>(`http://localhost:8080/users/${username}/todos`);
    // console.log('Execute Hello World Bean Service');
  }

  deleteTodo(username, id) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }
}
