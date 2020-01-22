import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';

export class Todo {
  constructor(public id: number, public description: string, public done: boolean, public targetDate: Date ) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: ListTodosComponent[];
  message: string;

  // todos = [
  //   {id: 1, description: 'Learn to Dance', targetDate: new Date(), done: 'False'},
  //   {id: 2, description: 'Eat Totally Authentic Tacos', targetDate: new Date(), done: 'False'},
  //   {id: 3, description: 'Vacation in Bora Bora', targetDate: new Date(), done: 'False'},
  // ];

  constructor(private todoService: TodoDataService) { }

  ngOnInit() {
    this.todoService.retrieveAllTodos('MarvinBusiness').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('MarvinDawson', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful`;
      }
    );
  }

}
