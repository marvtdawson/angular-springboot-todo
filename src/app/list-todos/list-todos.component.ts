import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id: 1, description: 'Learn to Dance', targetDate: new Date(), done: 'False'},
    {id: 2, description: 'Eat Totally Authentic Tacos', targetDate: new Date(), done: 'False'},
    {id: 3, description: 'Vacation in Bora Bora', targetDate: new Date(), done: 'False'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
